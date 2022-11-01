const { createClient } = require('@clickhouse/client')

class ClickHouse {
  constructor (host) {
    this.host = host
  }

  #client () {
    return createClient({
      host: this.host
    })
  }

  async #exec (query) {
    const client = this.#client()
    await client.exec({ query })
    await client.close()
  }

  async createDatabase (databaseName, databaseDescription) {
    try {
      await this.#exec(`
        CREATE DATABASE "${databaseName}" COMMENT '${databaseDescription}';
      `)
      console.log(`Created database ${databaseName}`)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async deleteDatabase (databaseName) {
    try {
      await this.#exec(`
        DROP DATABASE IF EXISTS "${databaseName}";
      `)
      console.log(`Deleted database ${databaseName}`)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async listDatabases () {
    try {
      const client = this.#client()
      const listDb = await client.query({
        query: 'SELECT * FROM system.databases;'
      })
      console.log('Listing Databases')
      const listDbJson = await listDb.json()
      return listDbJson
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

module.exports = { ClickHouse }
