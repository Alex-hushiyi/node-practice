const eventEmitter = require('events')

// 用法 跟event bus 第三方库 mitt 采用发布订阅模式
//发布订阅模式 off on emit once
// process的源码嫁接了eventEmitter，所以process也可以使用on emit once off

const bus = new eventEmitter()
// 事件的默认最大监听数量是10个
bus.setMaxListeners(20)
console.log(bus.getMaxListeners())
// 订阅一个事件

const fn = (a, b) => {
  console.log(a, b)
}
bus.on('event', fn)
// bus.once('event',fn)
// bus.off('event',fn)

//发布

bus.emit('event', 1, 2)
bus.emit('event', 1, 2)
bus.emit('event', 1, 2)
