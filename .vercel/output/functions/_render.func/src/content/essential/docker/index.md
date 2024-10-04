---
title: "Docker and things you need to know 💥💥💥"
description: "Docker and things you need to know"
pubDate: "Sep 30 2024"
heroImage: "/docker.png"
---

⚡⚡⚡ Docker is a platform that allows developers to **build, deploy, and run applications** inside lightweight, portable containers. Containers package an application and its dependencies, ensuring that it runs consistently across different environments.

### Key Concepts of Docker:

1. **Containers**:

   - A **container** is a lightweight, standalone executable package that includes everything needed to run an application (code, runtime, libraries, dependencies).
   - Containers are isolated but share the host OS kernel, making them more efficient than virtual machines (VMs).

2. **Images**:

   - A **Docker image** is a read-only template used to create containers. It includes the application code, dependencies, and the environment configuration.
   - You can think of images as snapshots of your application and environment. Docker images are built from a **Dockerfile**.

3. **Dockerfile**:

   - A **Dockerfile** is a script containing instructions to assemble a Docker image. It specifies the base image, dependencies, environment variables, and commands to run inside the container.

   Example of a basic Dockerfile:

   ```Dockerfile
   # Use an official Node.js runtime as a base image
   FROM node:14

   # Set the working directory inside the container
   WORKDIR /usr/src/app

   # Copy package.json and install dependencies
   COPY package*.json ./
   RUN npm install

   # Copy the rest of the application files
   COPY . .

   # Expose the application on port 3000
   EXPOSE 3000

   # Command to run the application
   CMD ["npm", "start"]
   ```

4. **Docker Hub**:

   - **Docker Hub** is a cloud-based registry where you can find, share, and store Docker images. You can either pull existing images (e.g., official Node.js images) or push your custom images.

5. **Volumes**:

   - Docker **volumes** provide persistent storage to containers. Data in a container is lost once the container stops, but volumes allow you to persist and share data between containers or between a container and the host machine.

6. **Networks**:

   - Docker provides networking capabilities that allow containers to communicate with each other. Docker containers can be connected to different network types, such as bridge networks (the default) or overlay networks for multi-host communication.

7. **Docker Compose**:

   - **Docker Compose** is a tool for defining and running multi-container Docker applications. It uses a `docker-compose.yml` file to configure the services, networks, and volumes for the application.

   Example of a `docker-compose.yml` for a multi-service app:

   ```yaml
   version: "3"
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       volumes:
         - .:/usr/src/app
     db:
       image: postgres
       environment:
         POSTGRES_USER: example
         POSTGRES_PASSWORD: example
   ```

### Key Docker Commands:

- **docker build**: Builds a Docker image from a Dockerfile.
  ```bash
  docker build -t my-app .
  ```
- **docker run**: Runs a container from an image.
  ```bash
  docker run -p 3000:3000 my-app
  ```
- **docker ps**: Lists running containers.
- **docker exec**: Runs commands inside a running container.
  ```bash
  docker exec -it <container_name> bash
  ```
- **docker-compose up**: Starts all services defined in a `docker-compose.yml` file.
  ```bash
  docker-compose up
  ```

### Benefits of Docker:

1. **Consistency Across Environments**: Docker ensures that your application runs the same way across development, testing, and production environments by encapsulating the environment dependencies within the container.
2. **Isolation**: Containers are isolated from each other and the host system, ensuring that different applications or versions don’t interfere with one another.
3. **Portability**: Containers can run on any system that supports Docker, making it easy to deploy across different infrastructure (e.g., local development, cloud, or on-premise servers).
4. **Efficiency**: Docker containers share the host OS kernel, making them more lightweight and faster to start compared to VMs.
5. **Microservices Architecture**: Docker simplifies managing microservices by allowing you to run each service in its own container and scale them independently.

- You can reference this example below:

```
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

[Reference link][def]

[def]: https://github.com/vercel/next.js/blob/c3006f6c41484b961919d3526f30370668bbda16/examples/with-docker/Dockerfile
