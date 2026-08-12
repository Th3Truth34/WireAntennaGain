#!/usr/bin/env bash
# Download the complete SEC "Fails-to-Deliver" (FTD) archive.
#
# The SEC publishes fails-to-deliver data free, twice a month, with roughly a
# one-month lag, plus a quarterly FOIA back-set for 2004-2009. This script
# scrapes the official listing page for every .zip link and downloads them all.
#
# Usage:  ./fetch_ftd.sh [DEST_DIR]     (default: ./raw)
#
# Notes:
#   * The SEC blocks requests without a descriptive User-Agent (HTTP 403).
#     Edit UA below to your own name/email per SEC's automated-access policy:
#     https://www.sec.gov/os/webmaster-faq#developers
#   * Each file is a snapshot of *cumulative open* fails per CUSIP on a given
#     settlement date — not new fails, and aggregated across all participants.
set -euo pipefail

UA="${SEC_UA:-YourName Research your.email@example.com}"
DEST="${1:-$(dirname "$0")/raw}"
LISTING="https://www.sec.gov/data-research/sec-markets-data/fails-deliver-data"

mkdir -p "$DEST"
echo "Fetching SEC FTD listing page..."
listing_html="$(curl -sSL -A "$UA" "$LISTING")"

# Extract every zip href (relative /files/data/... paths), build absolute URLs.
urls="$(printf '%s' "$listing_html" \
  | grep -oiE 'href="(/files/data[^"]*\.zip)"' \
  | sed -E 's/^href="//; s/"$//' | sort -u \
  | sed -E 's#^#https://www.sec.gov#')"

count="$(printf '%s\n' "$urls" | grep -c . || true)"
echo "Found $count files. Downloading to $DEST (6-way parallel, with retries)..."

printf '%s\n' "$urls" | xargs -P 6 -I {} sh -c '
  f="'"$DEST"'/$(basename "{}")"
  [ -s "$f" ] && exit 0
  curl -sSL -A "'"$UA"'" --retry 4 --retry-delay 2 --max-time 180 -o "$f" "{}" \
    && printf "  ok  %s\n" "$(basename "{}")" \
    || printf "  FAIL %s\n" "$(basename "{}")"
'

echo "Done. $(ls -1 "$DEST"/*.zip 2>/dev/null | wc -l) zip files in $DEST."
echo "Verify integrity:  for z in \"$DEST\"/*.zip; do unzip -tqq \"\$z\" || echo BAD \"\$z\"; done"
