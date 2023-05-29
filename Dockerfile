# Use the Node.js base image with the desired version
FROM node:17-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Use Nginx as a reverse proxy server for wildcard routing
## FROM nginx:1.21-alpine as production-stage

# Copy the built Vite application files to the Nginx server
## COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
## COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired port (change it to match your application's configuration)
# #EXPOSE 80

# Start the Nginx server
CMD ["npn", "run", "dev"]
## CMD ["nginx", "-g", "daemon off;"]
