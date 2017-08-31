var connection = require(`./interface`);

module.exports = function() {
  connection.request(`/getMasterList`, (response) => {
    console.log(response);
  });
}
