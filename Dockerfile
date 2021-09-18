FROM cypress/base:14.17.0
RUN mkdir /app
WORKDIR /app
# copy source project target destination
COPY . /app
# will install all project dependencies
RUN npm install
# commands to execute
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]