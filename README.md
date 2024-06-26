# simple-test-things

This plugin has been extracted out of a normal backstage project and set up as a dynamic plugin that can be loaded into Janus/RHDH to be used as a simple placeholder element.

The most crude way to run the plugin within a Backstage application is by building it and copying the resulting build files and package.json to the dynamic-plugins-root directory in the Backstage showcase application.

Before proceeding, ensure you have set up the [backstage-showcase](https://github.com/janus-idp/backstage-showcase) application and followed the [getting started instructions](https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/getting-started.md).

## Build Plugin

```bash
yarn install
yarn tsc
yarn build
```

## Copy Build Results to Host Application

```bash
export DYNAMIC_PLUGINS_ROOT=/path/to/backstage/showcase/dynamic-plugins-root
yarn export-dynamic
```

## Configure dynamicPlugins

Add the example configuration snippet below to your app-config.local.yaml.

```yaml
    simple-test-things:
      mountPoints:
        - mountPoint: custom.mount.point
          importName: TestInfoCard
          config:
            props:
              text: 'This is from the simple-test-things plugin'
```

## Run the Showcase App

```bash
yarn start
```
