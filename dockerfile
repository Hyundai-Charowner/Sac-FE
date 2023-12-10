# Use an official Node.js runtime as a parent image
FROM node:20.9.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use Nginx to serve the static files
FROM nginx:alpine

# Copy the build artifacts from Stage 1 to Stage 2
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]
