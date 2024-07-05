# Use official Node.js LTS image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 80
EXPOSE 80

# Define the command to run the Next.js application
CMD ["npm", "start", "--", "-p", "80"]
