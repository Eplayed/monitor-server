module.exports = (app) => {
  // 校验用户名是否正确
  const { validator } = app;
  validator.addRule("username", (rule, value) => {
    console.log(rule);
    if (!/^\w+@[a-z0-9]+\.[a-z]+$/i.test(value)) {
      return "用户名应该是邮箱";
    } else if (value.length < 3 || value.length > 10) {
      console.log("用户名的长度应该在3-10之间");
    }
  });
};
