# Use an official Node.js runtime as the base image
FROM node:14

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Express.js application will run
EXPOSE 3000

# Define the command to start your Express.js application
CMD ["node", "app.js"]