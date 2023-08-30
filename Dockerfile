FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV REACT_APP_SERVER_BASE_URL=http://a9250243aeec34a2d9404f933cfebdcd-1160646460.us-east-1.elb.amazonaws.com
EXPOSE 3000
CMD ["npm", "start"]