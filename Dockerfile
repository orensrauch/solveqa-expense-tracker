FROM cypress/base:12
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run development
RUN docker run -d -p 27017-27019:27017-27019 -v ~/merndb:/data/db --name mernproject mongo:latest
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]