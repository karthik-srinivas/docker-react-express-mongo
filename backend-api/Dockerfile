FROM node:10.15.3

WORKDIR /backend-api

COPY package*.json /backend-api/

RUN npm install

COPY . /backend-api/

EXPOSE 80

CMD ["npm", "start"]