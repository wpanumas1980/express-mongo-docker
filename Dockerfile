FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn
#RUN npm ci --only=production

COPY . .

EXPOSE 5555

CMD ["yarn", "dev"]