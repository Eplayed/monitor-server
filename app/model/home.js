/*
 * @Author: zyj
 * @Date: 2020-08-21 14:30:34
 * @LastEditors: zyj
 * @LastEditTime: 2020-09-09 08:57:21
 * @Description: file content
 * @FilePath: /egg-serve/init/app/model/home.js
 */
'user strict';

module.exports = app => {
  const {} = app.Sequelize;

  const Home = app.model.define('post', {});
};
