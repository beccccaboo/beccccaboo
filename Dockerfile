FROM node:18-alpine
WORKDIR /rebecca-portfolio
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000