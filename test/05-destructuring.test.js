var expect = require('chai').expect

describe('测试：Destructuring', () => {
    it('destructuring array, missing element will return undefined', () => {
        let n = [1, 2]
        let [x, y, z] = n
        expect(x).to.be.equal(n[0])
        expect(y).to.be.equal(n[1])
        expect(z).to.be.undefined
    })
    it('destructuring object, property assign to vairable with other name', () => {
        let user = {
            user_name: 'peter',
            user_age: 10
        }
        let {user_name, user_age, user_birthday} = user
        expect(user_name).to.be.equal(user.user_name)
        expect(user_age).to.be.equal(user.user_age)
        expect(user_birthday).to.be.undefined

        let {user_name:uname} = user
        expect(uname).to.be.equal(user.user_name)
    })
    it('destructuring string', () => {
        let str = 'abc'
        let [a, , c] = str
        expect(a).to.be.equal(str.substr(0, 1))
        expect(c).to.be.equal(str.substr(2, 1))
    })
    it('destructuring expression using as funtion parameter', () => {
        let obj = {
            x: 1,
            y: 2,
            z: 3
        }
        function fn({x, y, z}) {
            expect(x).to.be.equal(obj.x)
            expect(y).to.be.equal(obj.y)
            expect(z).to.be.equal(obj.z)
        }
        fn(obj)
    })
})