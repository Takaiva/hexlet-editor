install:
	npm install

start:
	npm run build
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
