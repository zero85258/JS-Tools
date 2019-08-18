var _ = require('lodash');

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
rst = _.map(users, 'user');

console.log(rst)
