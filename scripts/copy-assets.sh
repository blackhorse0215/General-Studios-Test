#!/bin/bash

# Paths
SRC_DIR="../dist"
DEST_DIR="../assets"

echo "Copying files from $SRC_DIR to $DEST_DIR..."

# Create the destination directory if it doesn't exist
mkdir -p $DEST_DIR

# Copy assets and print the status
cp -r $SRC_DIR/* $DEST_DIR/ && echo "Files copied successfully." || echo "Failed to copy files."
