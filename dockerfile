# Use an official Node.js runtime as a parent image
FROM node:20.9.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY sac/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY sac .

# Build the React app
RUN npm run build

EXPOSE 3000
