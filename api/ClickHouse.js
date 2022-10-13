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

  async createDatabase (databaseName) {
    try {
      await this.#exec(`
        CREATE DATABASE ${databaseName}
      `)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

module.exports = { ClickHouse }
