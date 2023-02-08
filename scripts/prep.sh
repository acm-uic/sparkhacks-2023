#!/bin/bash
git checkout main
git reset --hard origin/main
git pull
git branch -m $1
