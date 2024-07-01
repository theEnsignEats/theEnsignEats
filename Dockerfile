# Base image
FROM node:18.17.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tailwind.config.js ./

RUN npm install
RUN npm i next@latest

# Install Node.js
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs                                                               # Install and make tailwindcss executable
RUN curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.3/tailwindcss-macos-arm64 \
&& mv tailwindcss-macos-arm64 tailwindcss && chmod +x tailwindcss

# If you have native dependencies use the following instead
# RUN apk add --no-cache --virtual .build-deps alpine-sdk python \
#     && npm install --no-optional --quiet \
#     && apk del .build-deps

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Run the application
CMD [ "npm", "run", "dev" ]