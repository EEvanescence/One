import comp from "/data/data/com.termux/files/home/One/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get started\",\"lang\":\"fa-IR\",\"frontmatter\":{\"title\":\"Get started\"},\"git\":{\"updatedTime\":1766518415000,\"contributors\":[{\"name\":\"EEvanescence\",\"username\":\"EEvanescence\",\"email\":\"127026836+EEvanescence@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/EEvanescence\"}],\"changelog\":[{\"hash\":\"fc079db0a66d7dd1280eec7b05342f96a951ed44\",\"time\":1766518415000,\"email\":\"127026836+EEvanescence@users.noreply.github.com\",\"author\":\"EEvanescence\",\"message\":\"Initial commit: VuePress site setup\"}]},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
