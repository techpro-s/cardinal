#!/bin/bash

sudo docker run --rm -d -p 8080:8080 -p 80:3000 --name=cardinal cardinal-app
