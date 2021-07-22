# Build
build-esm:
	npx lerna run build:esm

build-cjs:
	npx lerna run build:cjs

build: prebuild build-cjs build-esm

clean-buildinfo:
	npx tsc -b . --clean

clean: clean-buildinfo
	npx rimraf **/lib

prebuild: clean-buildinfo
	npx lerna run prebuild

# Lerna
dev:
	npx lerna run dev --stream

lint:
	npx lerna run lint --stream

test:
	npx lerna run test --stream

typecheck:
	npx lerna run typecheck

bootstrap:
	npx lerna bootstrap

link:
	npx lerna link

publish: typecheck lint build
	npx lerna publish --no-private --contents lib