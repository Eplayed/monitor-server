/*
 * @Author: zyj
 * @Date: 2020-08-19 13:26:28
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-19 13:30:38
 * @Description: file content
 * @FilePath: /init/app/service/create.js
 */
const Service = require("egg").Service;

class demoUserService extends Service {
  async getList() {
    const res = await this.app.mysql.select("user");
    return {
      code: 0,
      data: res,
    };
  }
  async addUser(params) {
    const res = await this.app.mysql.insert("user", {
      username: "zhangsan",
      email: "1111@qq.com",
    });

    console.log("res", res);
  }
}

module.exports = demoUserService