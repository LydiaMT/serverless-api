'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try{
    const id = event.queryStringParameters && event.queryStringParameters.id;
    await PeopleModel.delete(id);
    return {
      statusCode: 200,
      response: 'entry deleted'
    }
  } catch(error){
    return{
      statusCode: 500,
      response: error.message
    }
  }
}