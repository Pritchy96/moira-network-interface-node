var connection = require(`./interface`);

//This is a self calling function. This exports as normal, but allows for the module.parent check.
//If there is no module parent, we've ran this file standalone, so call the getMasterList() method.
//Adapted from: http://justindavis.co/2014/11/16/running-node-modules-from-the-command-line/
(function(){
    exports.getMasterList = function() {
      connection.request(`/getMasterList`, `GET`, (response) => {
        console.log(response);
      });
    };

    if (!module.parent) {
        exports.getMasterList();
    }

})();
