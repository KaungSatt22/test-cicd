FROM node:20-alpine

WORKDIR /usr/src/app
COPY dist ./dist

RUN npm install -g serve

WORKDIR /usr/src/app/dist
CMD ["serve", "-s", ".", "-l", "80"]

EXPOSE 80