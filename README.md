# Tmp: NestJS × GraphQL

## Setup

- .env file edit

### yarn install

```sh
% docker-compose run --rm tmp_nest_graphql_server yarn install
```

### migration run

```sh
% docker-compose run --rm tmp_nest_graphql_server npx prisma migrate dev --name init
```

## Run

```sh
% docker-compose up -d
```

## URL

### GraphQL Playground

```
http://localhost:3001/graphql
```

### Prisma Studio

```
http://localhost:5555/
```

## Versions

- Node.js: v18.10.0
- NestJS: v9.3.0
