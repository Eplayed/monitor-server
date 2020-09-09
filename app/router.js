

'use strict';
const validate = require('./valiedate/index')
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,validator } = app;
  router.get('/demo', controller.home.index);
  router.post('/create', controller.create.index);
validate(app)


};
