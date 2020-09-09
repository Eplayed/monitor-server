/*
 * @Author: zyj
 * @Date: 2020-07-30 14:38:29
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-21 14:25:16
 * @Description: file content
 * @FilePath: /init/app/controller/home.js
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('query', ctx.query);
    ctx.body = {
      id: 123,
    };
    ctx.status = 200;
  }
}

module.exports = HomeController;
