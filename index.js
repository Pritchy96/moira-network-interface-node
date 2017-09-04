getMasterListFunction = require(`./getMasterList`);

module.exports = {
   interface: require(`./interface`),   //TEMP, this wil not be exposed to the user when the API is built.
   getMasterList: getMasterListFunction,
   tags: require('./tags')
}
