#!/usr/bin/env node
// 告诉操作系统我执行自定义命令的时候 你帮我用node去执行 这个文件
import { program } from "commander";
import fs from "node:fs";
import inquirer from "inquirer";
import { checkPath,downloadTemplate} from "./util.js";

let json = fs.readFileSync('./package.json')
json = JSON.parse(json)


program.version(json.version)
console.log(json.version);
program.command('create <projectName>')
.alias('c')
.description('创建项目')
.action((projectName) => {
  console.log(projectName);
  inquirer.prompt([
    {
      type: 'input',  //输入 input 输入 confirm 确认 list 列表 选择框 checkbox
      name: 'projectName', //返回值的key
      message: '请输入项目名称', //描述
      default: projectName //默认值
    },
    {
      type: 'confirm',
      name: 'isTS',
      message: '是否选用typescript模板',
    }
  ]).then(res => {
    if (checkPath(projectName)) {
      console.log('项目已存在');
      return
    }
    if (res.isTS) {
      downloadTemplate('ts',res.projectName)
    } else {
      downloadTemplate('js',res.projectName)
    }
  })
})
program.parse(process.argv)