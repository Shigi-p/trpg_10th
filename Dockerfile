FROM node:16-alpine
COPY . /usr/src/trpg_10th
WORKDIR /usr/src/trpg_10th
RUN yarn install