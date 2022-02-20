# [cli](https://juejin.cn/post/6966119324478079007)
- 脚手架属于node项目


## 变成npm项目
- npm init -y
## 将脚手架变成全局
- `npm link ` or `npm install -g`
- 注意如果是全局一定要在文件前面加上`#!/usr/bin/env node` 强制变成node否则会报错

# 插件
## [commander](https://www.npmjs.com/package/commander)
- npm install -S commander

```js

const { program } = require('commander');

// node bin/demo-commander.js --version 
// node bin/demo-commander.js -V
program.version('0.0.1')

// node bin/demo-commander.js -n
program.option('-n','请输入名称')

// node bin/demo-commander.js --t haha 
// node bin/demo-commander.js --type haha 
program.option('-t --type <type>','请输入类型')

const options = program.opts()

// console.log('opts=>',options)

//命令行
//node bin/demo-commander.js create 1-1
program.command('create <app-name>').description('创建一个标准的vue项目').action(name=>{
  console.log('正在创建vue项目',name)
})

//node bin/demo-commander.js -h  查看所有option和commands
// 解析置于最后
program.parse(program.argv)
```
### 配置package.json
```json
{
  "name": "my-cli",
  "version": "1.0.0",
  "description": "",
  "bin":{
    // key值【这里为v】就是command的前缀
    "datav":"./bin/index.js"
  },
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commander": "^9.0.0"
  }
}

```


## [figlet](https://www.npmjs.com/package/figlet)
- 大型字符，终端打印大型文字
```js


// promisify:将obj包装成promise

let {promisify} = require('util')

//callback版本
let figlet = require('figlet');

//promise版本
let asyncFiglet = promisify(require('figlet'))




//第一种callback写法
figlet('Hello World!!', function(err, data) {
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(data)
});

// 第二种promis版本

async function run(){
  let data = await asyncFiglet('Vue 3')
  console.log(data)
}

run()

// 运行
// node bin/demo-figlet.js
```


## [inquirer](https://www.npmjs.com/package/inquirer)
- 命令行参数输入交互 【参考npm init/vue create，参数交互填写config】
```js
//node bin/demo-inquirer.j

const { program } = require('commander');
const inquirer = require('inquirer');

program.version('0.0.1')

program.option('-n','请输入名称')

program.option('-t --type <type>','请输入类型')


/*
message:提示信息
type: 提示的类型【nput, number, confirm, list, rawlist, expand, checkbox, password, editor】
name：是输入结果的key值
*/

inquirer
  .prompt([
   {
    name:"userName",
    type:"input",
    message:"我是message"
   },
   {
    name:"chebox",
    type:"checkbox",
    message:"我的type为chebox",
    choices:['1','2','3']
   },
   {
    name:"list",
    type:"list",
    message:"我的type为list",
    choices:['1','2','3']
   }
  ]).then(answer=>{
    console.log("回答内容",answer)
  })


program.parse(program.argv)
```
## [chalk](https://www.npmjs.com/package/chalk)
- 设置命令行的文字颜色
```js
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
```

## [ora](https://www.npmjs.com/package/ora)
- loading效果
```js

const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
  setTimeout(()=>{
	// 结束
	spinner.stop()
	},1000)
}, 2000);
```
## [download-git-repo](https://www.npmjs.com/package/download-git-repo)
- 下载git厂库 clone模板
```js

const download = require("download-git-repo")
download('direct:https://github.com/xlearns/rollup-vue-datav.git', 'test', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})
```

## shelljs
