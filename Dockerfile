FROM node:20

# Working Dir
WORKDIR /usr/src/app

# Copy Package JSON Files
COPY package*.json ./

# Install Prettier (For our package's build function)
RUN npm install prettier -g 

# Install Files
RUN npm install

# Copy Source Files
COPY . .

# Build
RUN npm run build

# Expose the API Port
EXPOSE 3000

CMD [ "node", "index.js" ]