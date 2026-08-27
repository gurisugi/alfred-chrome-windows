#!/bin/bash
# Build the distributable .alfredworkflow (a zip with the contents of workflow/ at its root) into dist/
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
DIST_DIR="$REPO_DIR/dist"
OUT="$DIST_DIR/Chrome-Windows.alfredworkflow"

mkdir -p "$DIST_DIR"
rm -f "$OUT"
(cd "$REPO_DIR/workflow" && zip -r "$OUT" . -x ".*")

echo "Built: $OUT"
