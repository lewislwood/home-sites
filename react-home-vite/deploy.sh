#!/bin/sh 
kubectl config use-context rpi
kubectl apply -f deploy.ymlecho "Deployed to website //192.168.50.111:31000"
