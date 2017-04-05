.PHONY: image tag push

PKG_VERSION = $(shell \
	docker run --rm -it --entrypoint npm thorisalaptop/grunt-webfont \
	list grunt-webfont 2> /dev/null | \
	grep --extended-regexp --only-matching "grunt-webfont@[0-9\.]+" | \
	grep --extended-regexp --only-matching "[0-9\.]+")

image:
	docker build --tag thorisalaptop/grunt-webfont .

tag:
	docker tag thorisalaptop/grunt-webfont \
		thorisalaptop/grunt-webfont:$(PKG_VERSION)

push: image tag
	docker push thorisalaptop/grunt-webfont:latest
	docker push thorisalaptop/grunt-webfont:$(PKG_VERSION)
