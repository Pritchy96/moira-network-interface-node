module.exports = {
   interface: require(`./interface`),   //TEMP, this wil not be exposed to the user when the API is built.
   getMasterList: require(`./getMasterList`),
   tags: require('./tags'),
   nodes: require('./nodes')
}
