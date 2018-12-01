var expect = require('chai').expect

describe('测试： Rest operator', () => {
    it('Rest operator in destructuring, is a array of remaining elements', () => {
        let n = [1, 2, 3, 4, 5]
        let [x, y, ...z] = n
        expect(x).to.be.equal(n[0])
        expect(y).to.be.equal(n[1])
        expect(z).to.be.deep.equal(n.slice(2))
    })
    it('Rest operator in funciton parameters, is a array of remaining parameters', () => {
        function calc_area(name, ...args) {
            let result = 1
            for (i of args) {
                result *= i
            }
            return result
        }

        expect(calc_area('cubes', 1,2,3,4,5)).to.be.equal(1*2*3*4*5)
    })
})