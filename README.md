# nodeapi
RESTful api with NodeJS
### part1 init package.json and webpack.config.js
- package.json
- webpack.config.js
### part2 setup the midddleware and mongdb
 - add mongoose ,bodyparse,morgan,compression,helmet
 - 添加config文件,新建constants.js
 - 添加database的配置
 - 添加中间件,morgan是express默认的日志中间件,body-parser为HTTP请求体解析中间件,compression为服务器Gzip压缩功能,Helmet是一系列帮助增强Node.JS之Express/Connect等Javascript Web应用安全的中间件
 - 使用joi来验证数据模型
### part3 add bcrypt and passport
- 添加rimraf清除dist文件夹
- crypt the user password（用户注册登录这一块，采用 bcrypt 加密密码，JWT 认证授权的方案）
- create the localstrategy with passport
- can log a user

### part add passport and passport-local
- passport 是一个NODE做登录验证的中间件，支持本地账号验证和第三方账号登录验证（OAuth和OpenID等），支持大多数Web网站和服务