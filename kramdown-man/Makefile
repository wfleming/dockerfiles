.PHONY: image tag push

PKG_VERSION = $(shell \
	docker run --rm thorisalaptop/kramdown-man gem list kramdown-man | \
	grep --extended-regexp --only-matching "[0-9\.]+")

image:
	docker build --tag thorisalaptop/kramdown-man .

tag:
	docker tag thorisalaptop/kramdown-man \
		thorisalaptop/kramdown-man:$(PKG_VERSION)

push: image tag
	docker push thorisalaptop/kramdown-man:latest
	docker push thorisalaptop/kramdown-man:$(PKG_VERSION)
