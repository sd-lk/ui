# Build
build: clean-buildinfo
	npx lerna run build

clean-buildinfo:
	npx tsc -b . --clean

clean: clean-buildinfo
	npx rimraf **/lib

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

publish: lint build
	npx lerna publish --no-private --contents lib