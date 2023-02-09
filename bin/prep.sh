#!/bin/bash

if [ -z "$1" ];
then
  echo "Usage: $0 <name-of-new-branch>"
fi

if [ $# -gt 1 ];
then
  echo "Make sure your branch name is valid! (All lowercase, dashes instead of spaces)"
fi

# Ensure script can be invoked from anywhere
scriptDir=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
cd ${scriptDir}/../

# Switch to the main branch
git checkout main

# Delete any changes to reduce the chance of conflict
git reset --hard origin/main

# Get the latest changes
git pull

# Switch to a new branch
git checkout -b $1
