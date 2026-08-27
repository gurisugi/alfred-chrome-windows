#!/bin/bash
# workflow/ をAlfredのworkflowsディレクトリへsymlinkする
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
WORKFLOWS_DIR="$HOME/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows"
LINK="$WORKFLOWS_DIR/alfred-chrome-windows"

mkdir -p "$WORKFLOWS_DIR"
ln -sfn "$REPO_DIR/workflow" "$LINK"

# Alfredが起動していれば再読み込み（未起動でも失敗させない）
osascript -e 'tell application id "com.runningwithcrayons.Alfred" to reload workflow "com.gurisugi.alfred-chrome-windows"' 2>/dev/null || true

echo "Installed: $LINK -> $REPO_DIR/workflow"
