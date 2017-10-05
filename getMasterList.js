var connection = require(`./interface`);
var fs = require('fs');

//This is a self calling function. This exports as normal, but allows for the module.parent check.
//If there is no module parent, we've ran this file standalone, so call the getMasterList() method.
//Adapted from: http://justindavis.co/2014/11/16/running-node-modules-from-the-command-line/
(function(){
    exports.getMasterList = function() {
      connection.request(`/getMasterList`, `GET`, (response) => {
        var content = "module.exports = {\n"

        response.forEach((tagType, index, array) => {
          content +=
            `\t${tagType.name}: {\n`
          + `\t\ttag_table_type: '${tagType.tagTableType}',\n`
          + `\t\ttag_type_id: '${tagType.tagTypeId}',\n`
          + `\t\tcreation_date: '${tagType.creationDate}'\n`
          + `\t}`;

          if (index !== array.length-1) {
            content += `,\n`
          }
        });

        content += `\n}\n`;

        fs.writeFile(`${__dirname}/tag_types.js`, content, function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("File saved!");
        });
      });
    };

    if (!module.parent) {
        exports.getMasterList();
    }

})();
