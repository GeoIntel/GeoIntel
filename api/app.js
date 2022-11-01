const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ClickHouse } = require('./ClickHouse')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const ch = new ClickHouse('http://db:8123')

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Thanks for using GeoIntel.')
})

app.get('/project', async (req, res) => {
  try {
    const result = await ch.listDatabases()
    const filteredDatabases = result.data.filter(db => db.name.toLowerCase() !== 'information_schema' && db.name.toLowerCase() !== 'system' && db.name.toLowerCase() !== 'default')
    res.send(filteredDatabases)
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.send({ error })
  }
})

app.post('/project', async (req, res) => {
  try {
    const result = await ch.createDatabase(req.body.databaseName, req.body.databaseDescription)
    res.send({
      result
    })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.send({ error })
  }
})

app.delete('/project', async (req, res) => {
  try {
    const result = await ch.deleteDatabase(req.body.databaseName)
    res.send({
      result
    })
  } catch (error) {
    console.log(error)
    res.statusCode = 500
    res.send({
      error
    })
  }
})

app.listen(port, () =>
  console.log(`GeoIntel running on port ${port}, http://localhost:${port}`)
)
