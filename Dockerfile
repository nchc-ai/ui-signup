FROM node:16.20.2-alpine

WORKDIR /src/github.com/nchc-ai/aitrain-ui-signup


COPY yarn.lock .
COPY package-lock.json .
COPY package.json .
RUN yarn install

COPY . .

CMD ["sh", "-c","yarn docker"]
