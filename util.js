import util from 'util'
import { exec } from 'child_process'

const execPromise = util.promisify(exec)

execPromise('node -v').then((stdout) => {
  console.log(stdout)
}).catch(err => {
  console.error(err)
})

/// printf %s 匹配字符的  %d 匹配数字的 
console.log(util.format('%s---%s', 'Hello', 'world'))


// exec('node -v', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(stdout)
// })