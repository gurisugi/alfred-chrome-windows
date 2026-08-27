#!/bin/bash
# 配布用の .alfredworkflow（workflow/ の中身をルートに持つzip）を dist/ に生成する
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
DIST_DIR="$REPO_DIR/dist"
OUT="$DIST_DIR/Chrome-Windows.alfredworkflow"

mkdir -p "$DIST_DIR"
rm -f "$OUT"
(cd "$REPO_DIR/workflow" && zip -r "$OUT" . -x ".*")

echo "Built: $OUT"
