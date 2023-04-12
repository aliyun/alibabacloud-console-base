# @alicloud/ts-config

Shareable tsconfig for package development.

## Install

```shell
yarn add -D @alicloud/ts-config
```

## Usage

In your `tsconfig.json`:

```json
{
  "extends": "@alicloud/ts-config/index.json",
  "include": [
    "./src"
  ]
}
```

NOTE: `include/exclude/files` should always be set, see <https://www.typescriptlang.org/tsconfig#extends>.