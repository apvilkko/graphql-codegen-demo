# GraphQL Code Generator With TypeScript Demo

Using [GraphQL Code Generator](https://www.graphql-code-generator.com/) to generate types and client code against an existing GraphQL backend.

## The problem

- Backend server is not directly usable in client code, because (choose any that apply)
  - it is external, maintained by another team/organisation
  - it is in a separate repo
  - it is written in another language
- Maintaining typings in multiple codebases violates DRY
  - when backend changes client breaks without indication

## The solution

- Generate typings and client code automatically against a backend server
- Type checking can be used to break the client build when backend schema changes

## Development

Client at http://localhost:4000

```
yarn start
```

Update typings (while server running):

```
yarn codegen
```
