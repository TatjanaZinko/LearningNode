 class CatHello {
     constructor(name) { 
         this.name = name;
     }
     sayHello = function(){                 
        const catMe = require('cat-me');
        return(catMe() + '\n' + 'Hello, I am ' + this.name);
     }
 }


 module.exports = CatHello;