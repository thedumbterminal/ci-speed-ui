#!/usr/bin/env bash

#upload test xml to ci-speed

set -e

PROJECT_NAME=$1
BUILD_REF=$2
COMMIT=$3
FILES="eslint_junit.xml junit.xml"


HOST=https://ci-speed.herokuapp.com
#HOST=http://localhost:5000

echo "Project: ${PROJECT_NAME} Build: ${BUILD_REF}"

for FILE in ${FILES}; do
  if [[ -f "$FILE" ]]; then
    echo "Uploading ${FILE} ..."
    curl --fail -X "POST" \
      "${HOST}/api/test_runs/" \
      -H "accept: application/json" \
      -H "Authentication-Token: ${CI_SPEED_AUTH_TOKEN}" \
      -H "Content-Type: multipart/form-data" \
      -F "file=@${FILE};type=text/xml" \
      -F "project_name=${PROJECT_NAME}" \
      -F "build_ref=${BUILD_REF}" \
      -F "commit_sha=${COMMIT}"
  fi
done
