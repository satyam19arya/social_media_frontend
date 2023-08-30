FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV REACT_APP_SERVER_BASE_URL=http://localhost:4000
EXPOSE 3000
CMD ["npm", "start"]