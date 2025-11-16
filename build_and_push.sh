#! /bin/bash  

podman machine start
  podman login registry.bkr.codes
  podman build --platform linux/amd64 -t registry.bkr.codes/cybernetici:latest .
  podman push registry.bkr.codes/cybernetici:latest
