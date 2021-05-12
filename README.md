# Lab 18 | AWS: API, Dynamo and Lambda | 401 JavaScript
# Author: Lydia Minehan-Tubic

## Links & Resources

✨ [Pull Request]()

✨ [people.json]()

✨ [GET lambda]() | [POST lambda]() | [PUT lambda]() | [DELETE lambda]()

## Feature Tasks

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

✨ AWS Cloud Services: DynamoDB, API Gateway, Lambda Functions

✨ Dependencies: uuid, dynamoose

- Create one table for one data model at Dynamo DB
- Create a `Dynamoose` schema to define the structure of your table
- Write lambda functions that will separately perform the proper CRUD operation on the database
- Create your routes using API Gateway
  - Routes should integrate with the appropriate Lambda function to perform the operation
- Once you can assert the type of data coming back from Dynamoose and the type of input you’ll get from the API in the `event`, write the test cases for each Lambda function

## Documentation

## Data Architecture

```json

```

## Sources, Resources, & References

- [Query | Dynamoose](https://dynamoosejs.com/guide/Query/)
- [Condition | Dynamoose](https://dynamoosejs.com/guide/Condition/#conditioneqvalue)