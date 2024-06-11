# Holos Portal

Build a deployable image:

```sh
# Build the backend
yarn install --frozen-lockfile
yarn tsc
yarn build:backend --config ../../app-config.yaml
# Build the image
docker image build . -f packages/backend/Dockerfile --tag quay.io/holos-run/portal:latest
docker push quay.io/holos-run/portal:latest
```

Make the secret:

```sh
kubectl create secret generic \
  --from-file=./app-config.yaml \
  --from-file=./app-config.production.yaml \
  --from-file=./org.yaml \
  --dry-run=client \
  -o yaml \
  backstage-backend \
  | kubectl apply -f-
```
