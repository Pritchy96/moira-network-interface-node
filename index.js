getMasterListFunction = require(`./getMasterList`);

module.exports = {
   interface: require(`./interface`),   //TEMP, this wil not be exposed to the user when the API is built.
    getMasterList: getMasterListFunction,
    //TODO: implement try/catch for updating tag_types
    tag_types: require('./tag_types')
    // tag_types: (function() {
    //   try {
    //     require('./tag_types');
    //   } catch(err) {
    //     console.log(err);
    //   }
    // })()
}
