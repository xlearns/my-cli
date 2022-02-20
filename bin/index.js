#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
let {promisify} = require('util')
let asyncFiglet = promisify(require('figlet'))
const inquirer = require('inquirer');
let init = require('./init')

let log = function(data){
  console.log(chalk.blue(data));
}

async function printLogo(){
  try{
   let data = await asyncFiglet('my-cli')
   log(data)
  }catch(error){
   console.log(error)
  }
 }

program.version('1.0.0')
program.option("-n --name<type>",'outpuname')

program.command('create <app-name>').description('创建vue项目').action(async (name)=>{
  await printLogo()
  let answer= await inquirer
  .prompt([{
    name:"language",
    type:"list",
    message:"请选择语言",
    choices:['Javascript','Typescript']
  }])

  if(answer.language=='Javascript'){
    init(name)
  }
})

program.parse(process.argv)