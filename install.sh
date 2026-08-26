#!/bin/bash
# workflow/ をAlfredのworkflowsディレクトリへsymlinkする
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
WORKFLOWS_DIR="$HOME/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows"
LINK="$WORKFLOWS_DIR/alfred-chrome-windows"

mkdir -p "$WORKFLOWS_DIR"
ln -sfn "$REPO_DIR/workflow" "$LINK"

echo "Installed: $LINK -> $REPO_DIR/workflow"
