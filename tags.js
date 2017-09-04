var interface = require('./interface.js');

module.exports = {
   addTag: function(tag) {
      interface.request(`/addTag`, 'POST', function() {}, tag);
   },

   //TODO: implement try/catch for updating tag_types
   tag_types: require('./tag_types')
   // tag_types: (function() {
   //   try {
   //   } catch(err) {
   //     console.log(err);
   //   }
   // })()
}
