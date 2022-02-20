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