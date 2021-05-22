#installing dependent program
FROM  node:alpine
WORKDIR /usr/app 
#installing dependendent package
COPY ./package.json ./
RUN npm install
COPY ./ ./
#starting applicaiton

CMD ["npm" , "start"]