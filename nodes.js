var interface = require('./interface.js');

module.exports = {
   addNode: function(tag, callback) {
     interface.request(`/addNode`, 'POST', {tag}, callback);
   },

   deleteNode: function(resetDeleteDate, nodeId, callback) {
    interface.request(`/deleteNode`, 'POST', {resetDeleteDate, nodeId}, callback);
   }

   //TODO: implement try/catch for updating tag_types
   // tag_types: (function() {
   //   try {
   //   } catch(err) {
   //     console.log(err);
   //   }
   // })()
}
