var stDis = function () {
  this.fs = ''
  this.type = ''
  this.size = ''
  this.used = ''
  this.use = ''
  this.mount = ''
}

stDis.prototype.setstDIS = function (stats) {
  this.fs = stats.fs
  this.type = stats.type
  this.size = stats.size
  this.used = stats.used
  this.use = stats.use
  this.mount = stats.mount
}

module.exports = stDis
