#!/usr/bin/env bash

export PATH_SETTINGS="./package.json"

#Define variables
if [ -z $(cat $PATH_SETTINGS | jq -r '.version') ]; then
    echo "Version is empty"
    exit 1
else 
    export VERSION_NUMBER=$(cat $PATH_SETTINGS | jq -r '.version')
    echo $VERSION_NUMBER    
fi
