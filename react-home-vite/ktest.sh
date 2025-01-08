#!/bin/sh 
kubectl config use-context docker-desktop
kubectl apply -f deploy.yml
echo "test deployed to localhost:31000 "