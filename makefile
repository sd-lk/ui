# Build
build:
	yarn tsc -b .

clean:
	yarn tsc -b . --clean; yarn rimraf **/lib

# Lerna
lint:
	yarn lerna run lint

test:
	yarn lerna run test

bootstrap:
	yarn lerna bootstrap

link:
	yarn lerna link

publish:
	yarn lerna publish