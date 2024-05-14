FROM node:latest
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV REACT_APP_SERVER_BASE_URL=http://a7b8d7bf73eed4cf7804495fe4d474fe-1560579969.us-east-1.elb.amazonaws.com
ENV WDS_SOCKET_PORT=0
EXPOSE 3000
CMD ["npm", "start"]