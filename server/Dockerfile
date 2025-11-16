FROM node:18-alpine

WORKDIR /app

# Install production dependencies
COPY server/package*.json ./
RUN npm ci --production

# Copy server source
COPY server/ .

EXPOSE 5000

CMD ["node", "server.js"]
