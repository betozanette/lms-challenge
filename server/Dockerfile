FROM node:12

# Create app directory
WORKDIR server
ADD . /server

# Install app dependencies
RUN yarn

# Run!
EXPOSE 3333
ENTRYPOINT ["yarn",  "start"]