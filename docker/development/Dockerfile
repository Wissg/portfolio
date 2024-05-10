ARG NODE_VERSION=20.11.1

################################################################################
# Use the Node.js image as the base for all stages.
FROM node:${NODE_VERSION}-alpine AS base

# Set the working directory for all build stages.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for installation.
COPY package*.json ./

# Install packages necessary for Next.js build.
RUN apk add --no-cache libc6-compat

# Change ownership to the non-root user.
RUN chown -R node:node /usr/src/app

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base AS development

# Set the Node environment to development.
ENV NODE_ENV=development

# Uncomment the following line to disable telemetry during runtime if desired.
# ENV NEXT_TELEMETRY_DISABLED=1

# Run the application as a non-root user.
USER node

# Install dependencies.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose port 3000 for the application.
EXPOSE 3000

# Command to run the development server.
CMD npm run dev
