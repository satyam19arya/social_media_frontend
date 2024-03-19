FROM node:latest
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV REACT_APP_SERVER_BASE_URL=http://backend.satyam-arya.click
ENV WDS_SOCKET_PORT=0
EXPOSE 3000
CMD ["npm", "start"]
