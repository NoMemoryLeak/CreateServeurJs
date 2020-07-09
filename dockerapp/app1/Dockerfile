FROM node:12

# Create app directory
ADD . /app/
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]