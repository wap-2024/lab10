// 8. Review IIFE, bind, apply, call methods first, what's the value of result in the console?
const result = (function(exports, module){
  exports = module.exports;
  exports.firstname = 'John';
  module.exports.lastname = 'Smith';
  exports = {
    getFullName: function(){
      console.log('John Smith')
    }
  }
  return module.exports;
// }).apply(null, [null, {exports: {}}]);
// }).call(null, null, {exports: {}});
}).bind(null, null, {exports: {}})();
console.log(result);

// Answer: 
// apply: { firstname: 'John', lastname: 'Smith' }
// call: { firstname: 'John', lastname: 'Smith' }
// bind: { firstname: 'John', lastname: 'Smith' }
// IIFE: { lastname: 'Smith' }
// Explanation:
// The IIFE function is invoked with null as the context and an array of two arguments: null and an object with an exports property that is an empty object.
// Inside the IIFE, the exports parameter is assigned to the module.exports object.
// The exports object is then assigned to the module.exports object, so they both point to the same object.
// The firstname property is added to the exports object.
// The lastname property is added to the module.exports object.
// The exports object is then reassigned to a new object with a getFullName method.
// The module.exports object is returned from the IIFE.
// The result is the module.exports object, which has the lastname property but not the firstname property.
