#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p public/projects/previews

build_preview() {
  local slug="$1" source="$2" output="public/projects/previews/$1.webp"
  if command -v magick >/dev/null 2>&1; then
    magick "$source" -auto-orient -resize '800x533^' -gravity center -extent 800x533 -strip -quality 78 "$output"
  elif command -v convert >/dev/null 2>&1; then
    convert "$source" -auto-orient -resize '800x533^' -gravity center -extent 800x533 -strip -quality 78 "$output"
  elif command -v ffmpeg >/dev/null 2>&1; then
    ffmpeg -hide_banner -loglevel error -y -i "$source" -vf 'scale=800:533:force_original_aspect_ratio=increase,crop=800:533' -frames:v 1 -c:v libwebp -q:v 78 "$output"
  else
    echo 'ImageMagick or FFmpeg is required to build hover previews' >&2
    exit 1
  fi
  echo "Built $output"
}

build_preview suzuki-vitara-winter-plans public/projects/suzuki-vitara-winter-keyvisual.jpg
build_preview suzuki-service-campaign public/projects/suzuki-service-cover.webp
build_preview toyota-land-cruiser-200 public/projects/toyota-lc200-keyvisual.png
build_preview lada-vesta-sw-cross public/projects/lada-vesta-sw-cross-keyvisual.png
build_preview toyota-land-cruiser-prado public/projects/toyota-prado-keyvisual.webp
build_preview vip-club-tongits public/projects/casino/cover.jpg
