### 什么是可选链？
可选链 (Optional Chaining) 是一种新的 JavaScript 语言特性，它允许你对可能为 `undefined` 或 `null` 的属性进行访问而不会触发 `TypeError`。这个特性可以优雅地处理由于数据缺失或错误导致的错误，从而写出更健壮的代码。

在可选链操作符 (`?.`) 前加上一个对象的属性名，如果该属性存在，则会返回该属性值。如果该属性不存在，将返回 `undefined`。

例如，假设有一个对象 `user` 和它的一个子属性 `address`，你需要获取该属性的子属性 `street`，你可以使用可选链来处理：

```js
let street = user?.address?.street;
```

如果 `user` 或 `address` 不存在，则 `street` 变量将设置为 `undefined`，而不是抛出 `TypeError`。这可以避免许多冗长的空检查或条件语句，使代码更加简洁易读。

可选链操作符还可以用于函数调用：

```js
user?.logIn?.();
```

如果 `user` 或 `logIn` 方法不存在，则该调用会被短路，不会执行任何操作。

可选链是 ECMAScript 2020（ES2020）引入的新特性，因此它可能还不被所有的浏览器和运行环境支持。但是，你可以使用 Babel、TypeScript 或者 polyfill 来在旧的浏览器和 Node.js 版本中使用它。

### 配置修改

1. 新增或修改babel.config.js，主要是增加插件：@babel/plugin-proposal-optional-chaining
```
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 11"]
        }
      }
    ]
  ],
  plugins: [
    [
    "@babel/plugin-proposal-optional-chaining"
  ]
};
```
2. 初始化插件的npm包，使用npm或yarn下载
```
npm install --save-dev @babel/plugin-proposal-optional-chaining
```
```
yarn add @babel/plugin-proposal-optional-chaining --dev
```