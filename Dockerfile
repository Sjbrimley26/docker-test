# Stage 1
FROM node:10.13.0-alpine AS build

ADD . /src
WORKDIR /src

RUN npm i
RUN npm run lint
RUN npm run test
# RUN npm run build
RUN npm prune --production

# Stage 2
FROM node:10.13.0-alpine

ENV DIR=/usr/src/service
WORKDIR $DIR

EXPOSE 80

COPY --from=build /src/package.json package.json
COPY --from=build /src/package-lock.json package-lock.json
COPY --from=build /src/node_modules node_modules
COPY --from=build /src/app app

CMD ["node", "app/index.js"]