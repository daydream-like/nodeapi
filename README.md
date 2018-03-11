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

### part4 add passport and passport-local
- passport 是一个NODE做登录验证的中间件，支持本地账号验证和第三方账号登录验证（OAuth和OpenID等），支持大多数Web网站和服务

### part5 add passport-jwt and create the strategy
-  JSON Web Token（JWT）是一个非常轻巧的规范。这个规范允许我们使用JWT在用户和服务器之间传递安全可靠的信息。
- 一个JWT实际上就是一个字符串，它由三部分组成，头部、载荷与签名
- 载荷（Payload）
```
{
    "iss": "John Wu JWT",//该JWT的签发者
    "iat": 1441593502,//在什么时候签发的
    "exp": 1441594722,//什么时候过期，这里是一个Unix时间戳
    "aud": "www.example.com",//
    "sub": "jrocket@example.com",//该JWT所面向的用户
    "from_user": "B",// 
    "target_user": "A"//接收该JWT的一方
}
```
- 将上面的JSON对象进行[base64编码]可以得到下面的字符串。这个字符串我们将它称作JWT的Payload（载荷）
- 头部（Header）JWT还需要一个头部，头部用于描述关于该JWT的最基本的信息，例如其类型以及签名所用的算法等。这也可以被表示成一个JSON对象。
```
{
  "typ": "JWT",
  "alg": "HS256"
}
```
在这里，我们说明了这是一个JWT，并且我们所用的签名算法（后面会提到）是HS256算法。

对它也要进行Base64编码，之后的字符串就成了JWT的Header（头部）
- 签名（签名）将上面的两个编码后的字符串都用句号.连接在一起（头部在前），就形成了一个字符串,最后，我们将上面拼接完的字符串用HS256算法进行加密。在加密的时候，我们还需要提供一个密钥（secret）。如果我们用mystar作为密钥的话，那么就可以得到我们加密后的内容 
-  最后将header和payload进行签名就得到了完整的JWT