FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL
EXPOSE 3000
CMD ["npm", "start"]