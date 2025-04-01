
FROM mcr.microsoft.com/playwright:v1.41.1-focal

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]
