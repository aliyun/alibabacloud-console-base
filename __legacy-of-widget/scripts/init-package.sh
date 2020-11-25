#!/bin/bash

# Constants
rootDir=$PWD
c_primary="\033[0;36m"
c_warn="\033[1;33m"
c_err="\033[0;31m"
c_success="\033[0;32m"
c_end="\033[0m"


function main {
  # Read the package name from the prompt
  read -p "name> " package_name
  packageDir="$rootDir/packages/$package_name"
  # Create the package directory
  mkdir $packageDir
  # Create some directories
  mkdir "$packageDir/src" "$packageDir/test"
  touch "$packageDir/src/index.js" "$packageDir/test/index.test.js"
  # Create some other files
  echo '>0.2%\nnot dead' > "$packageDir/.browserslistrc"
  touch "$packageDir/README.md"
  echo '.*\n!.*ignore\nnode_modules/\nsrc/\ntest/\nbabel.config.js\n*lock.json' > "$packageDir/.npmignore"
  echo '# Changelog\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).' > "$packageDir/CHANGELOG.md"
  # Npm init and install
  cd $packageDir; npm init --yes > /dev/null
  npm install -D @babel/core @babel/cli @babel/preset-env
  # Modify package.json
  # $rootDir/scripts/polish.sh "$packageDir/package.json"
}

echo
echo "  Initialize a package..."
echo
main
echo
echo "  ${c_success}Complete!${c_end}"
echo

