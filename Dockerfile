# Установка более новой версии Node.js
FROM node:20-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование всего остального кода
COPY . .

# Экспонирование порта
EXPOSE 3000

# Запуск приложения docker run -v ${PWD}:/app -w /app -p 3000:3000 fewt npm run dev
CMD ["npm", "run", "dev"]