# Quick Start

주문 Application 실행

```shell
yarn start order
```

물류 Application 실행

```shell
yarn start warehouse
```

# How to build

주문 Application 빌드

```shell
yarn build order
```

물류 Application 빌드

```shell
yarn build warehouse
```

공통 모듈 빌드

```shell
yarn build shared
```

# How to publish

### 방법 1. Github Actions 사용

### 방법 2. (권장하지 않음) 로컬에서 publish

.npmrc 생성

```text
@bluemiv:registry=https://npm.pkg.github.com/bluemiv
always-auth=true
//npm.pkg.github.com/:_authToken={YOUR_GITHUB_TOKEN}
```

```shell
npm publish
```