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
//descriptionx 描述
//action enter之后的行为
program.command('create <app-name>').description('创建一个标准的vue项目').action(name=>{
  console.log('正在创建vue项目',name)
})

//node bin/demo-commander.js -h  查看所有option和commands
// 解析置于最后
program.parse(program.argv)