import DefaultTheme from "vitepress/theme"
// import type { Theme } from "vitepress"
// import "./custom.scss"
import Home from "./Home.vue"
import './rainbow.css'


// export default {
//   extends: DefaultTheme,
//   NotFound: () => 404,
//   enhanceApp({ app }) {
//     app.component('customHome', Home)
//     console.log(app)
//   }
// } satisfies Theme


export default {
  extends: DefaultTheme,
  Layout: Home
}