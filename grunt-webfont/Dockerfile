FROM node:7-slim
LABEL "maintainer" "Will Fleming <will@flemi.ng>"

RUN apt-get update && apt-get install -y fontforge ttfautohint

WORKDIR "/grunt-webfont"
COPY ./package.json ./Gruntfile.js ./
RUN  npm install --save-dev

VOLUME "/src"
VOLUME "/dest"
ENTRYPOINT ["/grunt-webfont/node_modules/.bin/grunt"]
