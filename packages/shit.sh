#!/bin/bash
### $1 == the first args to this script
### usage: script.sh /path/to/dir/

for f in `find . -maxdepth 1 -mindepth 1 -type d`; do
  echo $f
  rm $f/jest.config.js
done
