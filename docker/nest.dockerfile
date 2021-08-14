FROM node:14-alpine

WORKDIR /app
COPY . /app

RUN yarn install 
RUN yarn build 

ENV NODE_ENV=production

CMD ["yarn", "start"]
