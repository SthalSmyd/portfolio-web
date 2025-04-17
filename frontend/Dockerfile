# Stage 1: Build
FROM node:18 AS builder

ARG ENV=local
ENV ENV=${ENV}

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Run
FROM node:18 AS runner

WORKDIR /app
COPY --from=builder /app ./
RUN npm ci --omit=dev

CMD if [ "$ENV" = "local" ]; then \
      npm run dev; \
    else \
      npm run start; \
    fi
