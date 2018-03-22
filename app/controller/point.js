'use strict';

const Controller = require('egg').Controller;

class PointController extends Controller {
  async index() {
    this.ctx.body = {
      name: 123,
    };
  }
}

module.exports = PointController;
