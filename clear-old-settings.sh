#!/bin/bash

rm .env
rm functions/.env
rm .firebaserc
rm -rf .firebase
rm -rf node_modules
rm -rf functions/node_modules
cp .env.example .env
cp functions/.env.example functions/.env
git remote rm origin
