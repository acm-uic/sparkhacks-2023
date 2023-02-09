#!/bin/bash

# Ensure script can be invoked from anywhere
scriptDir=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
cd ${scriptDir}/../

# Add all changes
git add .

# Commit the changes to local branch
git commit

# Push the changes
git push origin HEAD

echo "Click the link above and create your pull request!"
