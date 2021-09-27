FROM cypress/base:12
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN docker pull mongo:latest
RUN mkdir merndb
RUN docker run -d -p 2717:27017 -v ~/merndb:/data/db --name merndb mongo:latest
RUN npm run development
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]