const expect = require('chai').expect

describe('测试：arrow function', () => {
    it('完整写法：(x) => { return x > 3 }', () => {
        let n = [1,2,3,4,5].filter((x) => {
            return x > 3
        })
        expect(n).to.have.length(2)
    })
    it('简化写法：x => x > 3', () => {
        let n = [1,2,3,4,5].filter(x => x > 3)
        expect(n).to.have.length(2)
    })
    it('arrow fuction中的this，等于定义arrow fuction时的this', () => {
        function callback(fn) {
            fn()
        }
        let person = {
            uname: 'local uname',
            say1: function() {
                callback(function() {
                    expect(this.uname).to.be.equal(undefined)
                })
            },
            say2: function() {
                callback(() => {
                    expect(this.uname).to.be.equal('local uname')
                })
            }
        }
        person.say1()
        person.say2()
    })
})