.PHONY: image tag push

image:
	docker build --tag thorisalaptop/svgo .

tag:
	docker tag thorisalaptop/svgo \
		thorisalaptop/svgo:$(shell docker run --rm -it thorisalaptop/svgo --version)

push: image tag
	docker push thorisalaptop/svgo:latest
	docker push thorisalaptop/svgo:$(shell docker run --rm -it thorisalaptop/svgo --version)
