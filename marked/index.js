const ejs = require('ejs');
const marked = require('marked');
const fs = require('fs');
let browser;
const browserSync = require('browser-sync');
const server = () => {
    browser = browserSync.create();
    browser.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
}
const init = (callback) => {
    const file = fs.readFileSync('README.md', 'utf-8');
    console.log(marked.parse(file));
    ejs.renderFile('template.ejs', 
      {content: marked.parse(file),
      title: "Markdown to html"
    }, (err, data) => {
        if(err) throw err;
        fs.writeFileSync('index.html', data);
        callback && callback();
    });
}
fs.watchFile('README.md', (curr, prev) => {
  if(curr.mtime !== prev.mtime) {
    init(() => {
      browser.reload();
    });
  }
});
init(() => {
    server();
});