# Use an official Node.js runtime as a parent image
FROM node:14 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

RUN npm run build

# Use a smaller image as the final runtime image
FROM nginx:alpine

# Copy the built Vue.js application from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

ENV PORT 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
