# @alicloud/markdownlint-config

## Install

```shell
yarn add -D markdownlint-cli2 @alicloud/markdownlint-config
```

## Usage

In your `.markdownlint.yml`:

```yaml
extends: "@alicloud/markdownlint-config/index.yml"
```

## NPM Script

```json
{
  "scripts": {
    "lint:md": "markdownlint-cli2 **/*.md #node_modules"
  }
}
```

## With `lint-staged`

```json
{
  "lint-staged": {
    "*.md": "markdownlint-cli2"
  }
}
```