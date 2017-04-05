FROM node:7-slim
LABEL "maintainer" "Will Fleming <will@flemi.ng>"

RUN npm install -g svgo

WORKDIR "/src"
VOLUME "/src"

ENTRYPOINT ["svgo"]
