var url = require('url');
var adr = 'http://localhost:8004/index.html?param0=Hello&param1=World';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//* localhost:8004
//* /index.html
//* ?param0=Hello&param1=World

var qdata = q.query;
console.log(qdata);
console.log(qdata.param1);

//* [Object: null prototype] { param0: 'Hello', param1: 'World' }
//* World
