const { JSDOM } = require('jsdom')
const fs = require('fs')

const root = new JSDOM(`<DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>`)

//请求一个接口拿到数据填充app里面
//fetch node18 版本之后
const document = root.window.document
const app = document.getElementById('app')
fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
  .then(response => response.json())
  .then(data => {
    // 使用data填充app
    console.log(data)
    data.forEach(item => {
      const img = document.createElement('img')
      img.src = item.url
      img.style.width = '200px'
      img.style.height = '200px'
      app.appendChild(img)
    })
    fs.writeFileSync('index.html', root.serialize())
    console.log(root.serialize())

  })
  .catch(error => {
    console.error('Error fetching data:', error)
  });



