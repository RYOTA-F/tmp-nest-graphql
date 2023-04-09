# Task Scheme

## Query

- タスク一覧を取得

```graphql
query {
  getTasks {
    id
    name
    duDate
    status
    description
  }
}
```

## Mutation

- タスクを新規作成

```graphql
mutation createTask($createTaskInput: CreateTaskInput!) {
  createTask(createTaskInput: $createTaskInput) {
    id
    name
    duDate
    status
    description
  }
}
```

## Query Variables

```graphql
{
  "createTaskInput": {
    "name": "Test Task 1",
    "duDate": "2023-04-11"
  }
}
```
