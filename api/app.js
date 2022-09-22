const express = require('express')

const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Thanks for using GeoIntel.')
})

app.listen(port, () =>
  console.log(`GeoIntel running on port ${port}, http://localhost:${port}`)
)
