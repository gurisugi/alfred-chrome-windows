#!/bin/bash
# Symlink workflow/ into Alfred's workflows directory (development install)
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
WORKFLOWS_DIR="$HOME/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows"
LINK="$WORKFLOWS_DIR/alfred-chrome-windows"

mkdir -p "$WORKFLOWS_DIR"
ln -sfn "$REPO_DIR/workflow" "$LINK"

# Reload the workflow if Alfred is running (don't fail if it isn't)
osascript -e 'tell application id "com.runningwithcrayons.Alfred" to reload workflow "com.gurisugi.alfred-chrome-windows"' 2>/dev/null || true

echo "Installed: $LINK -> $REPO_DIR/workflow"
