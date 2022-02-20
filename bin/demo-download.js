
const download = require("download-git-repo")
download('direct:https://github.com/xlearns/rollup-vue-datav.git', 'test', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})