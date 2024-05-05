# Use an official Node.js runtime as a parent image
FROM node:14 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the entire project to the container
COPY . .

RUN yarn run build

# 使用 nginx 镜像来服务 React 静态文件
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
