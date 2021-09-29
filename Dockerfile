
FROM cypress/browsers:node14.17.0-chrome91-ff89
# Create App Directory
RUN mkdir /mycypress
WORKDIR /mycypress
# Install Dependencies
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
# # Copy app source code
COPY . .
# # Exports
# EXPOSE 3000 
# Build the App
# Star App in production
CMD ["npm","run","ci"]