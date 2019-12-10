const express = require("express")
const fetch = require("node-fetch")

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/api/wiki/:title", (req, res) => {
  console.log(`Loading article for: ${req.params.title}`)
  loadArticle(req.params.title).then(articleJson => {
    res.json({items: [articleJson]})
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Helper Funcs
function loadArticle(title) {
  const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
  return fetch(wikiUrl).then(res => res.json())
}
