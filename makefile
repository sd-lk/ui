# Build
build:
	npx lerna run build

clean:
	npx tsc -b . --clean; npx rimraf **/lib

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

publish: typecheck lint test build
	npx lerna publish --no-private