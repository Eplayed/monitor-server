/*
 * @Author: zyj
 * @Date: 2020-07-30 14:38:29
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-19 13:31:30
 * @Description: file content
 * @FilePath: /init/config/plugin.js
 */

'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors:{
    enable:true,
    package:'egg-cors'
  },
  validate:{
    enable:true,
    package:'egg-validate'
  },
  mysql:{
    enable:true,
    package:'egg-mysql'
  }
};
