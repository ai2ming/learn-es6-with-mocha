const expect = require('chai').expect

describe('测试：object literal', () => {
    it('属性定义：{x} 等同于 {x:x}', () => {
        let x = 1;
        let obj = {x}
        expect(obj).to.have.property('x', x);
    })
    it('方法定义：fn() {} 等同于 function fn() {}', () => {
        let n = 10;
        let obj = {
            fn(n) {return n}
        }

        expect(obj).to.have.property('fn')
            .that.to.be.a('function')
        expect(obj.fn(n)).to.be.equal(n)
    })
    it('使用get和set定义计算属性', () => {
        let obj = {
            _x: 100,
            get x() {
                return this._x + 'px'
            },
            set x(value) {
                if ((typeof value) === 'string') {
                    this._x = parseInt(value)
                } else {
                    this._x = value;
                }
            }
        }
        expect(obj.x).to.be.equal('100px')
        obj.x = '200px'
        expect(obj._x).to.be.equal(200)
    })
})