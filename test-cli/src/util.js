import fs from "fs";
import download from "download-git-repo";
import ora from "ora";
let spinner = ora("正在下载模板...");

// 检查路径
export const checkPath = (path) => {
  if (fs.existsSync(path)) {
    return true;
  } else {
    return false;
  }
}

export const downloadTemplate = (branch,name) => {
  return new Promise((resolve, reject) => {
    spinner.start();
    download(`direct:https://gitee.com/chinafaker//vue-template.git#${branch}`, name, { clone: true }, (err) => {
      if (err) {
        reject(err)
      }
        resolve()
      spinner.succeed('下载成功')
    })
  })
}