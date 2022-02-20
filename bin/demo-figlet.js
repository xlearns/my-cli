

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
 try{
  let data = await asyncFiglet('Vue 3')
  console.log(data)
 }
 catch(error){
  console.log(error)
 }
}

run()

// 运行
// node bin/demo-figlet.js