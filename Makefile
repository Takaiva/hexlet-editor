install:
	npm install

start-dev:
	npm run prebuild
	npm run start:dev

start:
	npm run prebuild
	npm run start

front-dev:
	npm run serve

build:
	npm run build

lint:
	npx eslint .

test:
	npm test

heroku-deploy:
	git push heroku

heroku-logs:
	heroku logs
