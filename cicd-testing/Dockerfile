# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:20-alpine

WORKDIR /usr/src/app
RUN npm install -g serve

# Copy build output
COPY --from=build /usr/src/app/build ./build

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
