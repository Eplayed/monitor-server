"use strict";

const createRule = {
  username: {
    type: "username",
  },
  password: {
    type: "password",
    compare: "re-password",
  },
};

const Controller = require("egg").Controller;

class CreateController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      ctx.validate(createRule);
    } catch (error) {
      ctx.body = error;
    }

    console.log("body", ctx.body);
    ctx.status = 200;
  }
}

module.exports = CreateController;
