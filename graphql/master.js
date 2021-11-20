const GET_MASTER_PASSWORD = `
query {
    master {
      password
    }
  }
`

module.exports = {
    GET_MASTER_PASSWORD
}