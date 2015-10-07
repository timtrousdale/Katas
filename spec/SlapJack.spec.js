/*globals require, describe, it, expect*/

var SlapJack = require("../SlapJack");

(function() {
    'use strict';
    
describe('3 should Slap', function(){
 it('return 1 when given 1', function(){
     var result = SlapJack.getReult(1);
     expect(result.toEquals(1));
 });
});
}());