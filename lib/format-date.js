const datePadding = require('./date-padding')
module.exports = date => `${datePadding(date.getDate())}.${datePadding(date.getMonth() + 1)}.${date.getFullYear()}`
