FROM node:18

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

# CMD ["npm", "run", "start"]
CMD ["npm", "run", "dev"]
