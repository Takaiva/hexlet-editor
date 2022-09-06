install:
	npm install
	npm run typeorm -- migration:run -d src/data-source.ts

drop-data:
    npm run typeorm -- migration:revert -d src/data-source.ts

start-backend:
	npm run start:dev

start-dev:
	heroku local -f Procfile.development

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

start-frontend:
	npx webpack --watch --progress
