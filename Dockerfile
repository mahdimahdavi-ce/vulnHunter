# Step 1: Use an official Node.js runtime as a parent image
FROM docker.arvancloud.ir/node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the Vue.js application for production
RUN npm run build

# Step 7: Serve the built application with a static server (e.g., serve)
RUN npm install -g serve

# Step 8: Set the command to run the application
CMD ["serve", "-s", "dist"]

# Expose the port the app will run on
EXPOSE 5173
