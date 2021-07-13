
all:
	npx eslint
	rm -rf dist
	npx tsc
