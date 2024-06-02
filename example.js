// 此文件运行在 Node.js 服务器上
import { createSSRApp } from 'vue'
// Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`
})


// renderToString： 接受一个 Vue 应用实例作为参数，返回一个 Promise，当 Promise resolve 时，得到应用渲染 HTML。
renderToString(app).then((html) => {
  console.log(html)
})