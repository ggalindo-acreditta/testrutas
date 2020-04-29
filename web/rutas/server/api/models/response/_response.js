'use strict';

class Response {
  constructor(status, code, message, id) {
    this.status= status;
    this.message= message;
    this.code= code;
    this.errors= []; 
    this.id= id;
  } 
}

module.exports = Response;
