COMMIT_HASH = $(shell git rev-parse --short HEAD)
RET = $(shell git describe --contains $(COMMIT_HASH) 1>&2 2> /dev/null; echo $$?)
USER = $(shell whoami)

REPO = ghcr.io/nchc-ai
IMAGE = ui-signup

ifeq ($(RET),0)
    TAG = $(shell git describe --contains $(COMMIT_HASH))
else
	TAG = $(USER)-$(COMMIT_HASH)
endif

image:
	docker build -t $(REPO)/$(IMAGE):$(TAG) .

run-ui-docker:
	docker run -ti --rm  -p 3011:3011 $(REPO)/$(IMAGE):$(TAG)
