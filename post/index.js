'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try{
    const id = event.pathParameters && event.pathParameters.id;
    let data
    if(id){
      const list = await PeopleModel.query('id').eq(id).exec();
      data = list[0];
    } else {
      data = await PeopleModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch(error){
    return{
      statusCode: 500,
      response: error.message
    }
  }
}