VERSION := 0.1.8

SHELL=/bin/bash

bumpversion:
		bump2version --commit patch

bumpversion_minor: ## Bump version
		bump2version --commit minor

update_project:
	rm -rf node_modules
	rm package-lock.json
	npm i
