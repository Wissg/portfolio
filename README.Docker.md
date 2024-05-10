### Building and Running Your Application

When you're ready, start your application by running:

```bash
docker-compose up
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

You can build the development image with hot reload or build the production image.

### Deploying Your Application to the Cloud

First, build your image, for example:

```bash
docker build -t <docker-image-name> .
```

If your cloud uses a different CPU architecture than your development machine (e.g., you are on a Mac M1 and your cloud provider is amd64), you'll want to build the image for that platform, for example:

```bash
docker build --platform=linux/amd64 -t myapp .
```

Then, push it to your registry, for instance:

```bash
docker push myregistry.com/myapp
```

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/) docs for more detail on building and pushing.

## Examples for Next.js

### Simple
- [With Docker Example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

### Multi-Environment
- [With Docker Multi-Environment Example](https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env)

### References
* [Docker's Node.js Guide](https://docs.docker.com/language/nodejs/)
* [Next.js Documentation on Building and Deploying](https://nextjs.org/docs/pages/building-your-application/deploying)