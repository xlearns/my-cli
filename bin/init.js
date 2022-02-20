// template下载
let {promisify} = require('util')
const ora = require('ora');
const download = promisify(require("download-git-repo"))
const shell =require('shelljs')
const chalk = require('chalk');
let log = function(data){
  console.log(chalk.blue(data));
}


module.exports = async (appName)=>{
 log(`🚀 创建项目${appName}`)
 shell.rm('-rf',appName)
 const spinner =  ora('下载中...').start();
 try{
  await download('direct:https://github.com/xlearns/rollup-vue-datav.git',appName,{ clone: true })
  spinner.succeed('下载完成') 
  log(`
  下载完成,请执行下面命令启动项目
  ============================
  cd ${appName}
  npm install
  npm run dev
  `)
}catch(err){
   log(`下载失败`,err)
  spinner.stop()
 }
}