FROM node:12

# Create app directory
WORKDIR api
ADD . /api

# Install app dependencies
RUN yarn

# Run!
EXPOSE 80
ENTRYPOINT ["npm", "run", "start:development"]