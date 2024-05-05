# Use a base image with Node.js 18
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of your app's source code
COPY . .

# Build your React app
RUN yarn run build

# Further instructions like exposing ports and the CMD statement
EXPOSE 3000
CMD ["npm", "start"]
