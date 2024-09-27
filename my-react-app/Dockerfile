# Step 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000 instead of the default port 80
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]