var expect = require('chai').expect

describe('测试： Spread operator', () => {
    it('使用Spread operator构建数组: 将spread操作数组的成员，逐个放到目标数组中', () => {
        let n =[1, 2, 3, ...[4, 5]]
        expect(n).to.have.length(5)
        expect(n).to.be.deep.equal([1,2,3,4,5])
    })
    it('使用Spread operator构建对象，和构建数组类似', () => {
        var obj1 = {x: 1, y: 2}
        var obj2 = {z: 3, ...obj1}
        expect(obj2).to.have.property('x', 1)
        expect(obj2).to.have.property('y', 2)
    })
    it('将Spread operator的结果作为函数调用参数，相当于对参数逐个赋值', () => {
        let args = [1,2,3]
        function fn(x, y, z) {
            expect(x).to.be.equal(args[0])
            expect(y).to.be.equal(args[1])
            expect(z).to.be.equal(args[2])
        }
        fn(...args)
    })
})