/*
 * @Author: zyj
 * @Date: 2020-07-30 14:38:29
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-21 14:27:35
 * @Description: file content
 * @FilePath: /init/config/config.default.js
 */

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596090546444_1534';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    dialectOptions: {
      charset: 'utf8mb4',
    },
    database: 'nodvls_wmsejs',
    host: '10.108.26.129',
    port: '3306',
    username: 'vlsdb',
    password: 'P@ss1234',
    timezone: '+08:00',
  };
  // config.mysql = {
  //   client: {
  //     // host
  //     host: '10.108.26.129',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'vlsdb',
  //     // 密码
  //     password: 'P@ss1234',
  //     // 数据库名
  //     database: 'vls_wms',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };

  // add your user config here
  const userConfig = {
  // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
