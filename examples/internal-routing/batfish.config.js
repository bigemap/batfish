const path = require('path');

module.exports = () => {
  return {
    applicationWrapperPath: path.join(__dirname, './src/wrapper.js')
  };
};
