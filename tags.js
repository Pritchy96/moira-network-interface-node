var interface = require('./interface.js');

module.exports = {
   addTag: function(tag, callback) {
      interface.request(`/addTag`, 'POST', tag, callback);
   },

   //TODO: implement try/catch for updating tag_types
   tag_types: require('./tag_types')
   // tag_types: (function() {
   //   try {
   //   } catch(err) {
   //     console.log(err);
   //   }N
   // })()
}
