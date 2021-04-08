FROM node:12

# Create app directory
WORKDIR client
ADD . /client

# Install app dependencies
RUN yarn

# Run!
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]