FROM cypress/base:12
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run development
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]