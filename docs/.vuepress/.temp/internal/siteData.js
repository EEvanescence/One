export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"fa-IR\",\"title\":\"One\",\"description\":\"Just A little bit of Bullsheet!!\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://cdn.jsdelivr.net\",\"crossorigin\":\"anonymous\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
