# Holos Portal

Build a deployable image.  Refer to [hack/deploy](./hack/deploy) for more
details like how to create the secret and restart the deployment.

```sh
# Build the backend
yarn install --frozen-lockfile
yarn tsc
yarn build:backend --config ../../app-config.yaml
# Build the image
docker image build . -f packages/backend/Dockerfile --tag quay.io/holos-run/portal:latest
docker push quay.io/holos-run/portal:latest
```
