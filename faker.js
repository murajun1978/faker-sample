module.exports = function() {
  var faker = require('faker')

  return {
    users: Array.from(Array(10), (_, i) => {
      return {
        id: i + 1,
        name: faker.name.findName()
      }
    })
  }
}
