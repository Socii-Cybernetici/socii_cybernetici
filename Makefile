REGISTRY := registry.unionstack.dev
IMAGE := $(REGISTRY)/cybernetici:latest
DEPLOYMENT := cybernetici
NAMESPACE := catholic-codes

.PHONY: build push restart deploy

build:
	podman build --platform linux/amd64 -t $(IMAGE) .

push:
	podman push $(IMAGE)

restart:
	kubectl rollout restart deployment/$(DEPLOYMENT) -n $(NAMESPACE)

deploy: build push restart
