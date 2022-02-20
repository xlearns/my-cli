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