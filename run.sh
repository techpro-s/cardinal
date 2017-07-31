#!/bin/bash

sudo docker run --rm -d -p 8080:8080 -p 80:3000 -v app:/app --name=cardinal cardinal-app
