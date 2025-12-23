const dayjs = require('dayjs');

module.exports = {
  get now() {
    return dayjs();
  }
};