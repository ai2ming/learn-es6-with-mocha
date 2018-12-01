// import chai from 'chai'
// const expect = chai.expect

const expect = require('chai').expect

describe('测试：block作用域变量', () => {
    it('var定义的变量，在函数内部都可以使用', () => {
        var n=[1,2,3,4,5]
        for (var i = 0; i < n.length; i++) { }
        expect(i).to.be.equal(n.length);
    })
    it('let定义的变量，只能在定义变量所在的block内使用', () => {
        var n=[1,2,3,4,5]
        for (let i = 0; i < n.length; i++) { }
        function fn() { 
            return i
        }
        expect(fn).to.throw(ReferenceError, 'not defined');
    })
})

describe('测试：const常量', () => {
    it('const定义一个变量后，不能再进行赋值', () => {
        const n = 100;
        var fn = function() {
            n = 200;
        }
        expect(fn).to.throw(TypeError, 'Assignment to constant variable');
    })
})