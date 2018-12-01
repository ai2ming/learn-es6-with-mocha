const expect = require('chai').expect

describe('测试：template string', () => {
    it('定义多行文本', () => {
        let message = `hello
world`
       expect(message).to.be.equal('hello\nworld')
    })
    it('template string内部可以直接引用变量', () => {
        let user = 'adam'
        let greetings = `hello ${user}`
        expect(greetings).to.be.equal('hello ' + 'adam')
    })
    it('tagged template strings', () => {
        let message1 = '主标题'
        let message2 = '副标题'
        let html = escaped`<h1>${message1}</h1><h2>${message2}</h2>`
        function escaped(strings, arg1, arg2) {
            expect(strings).to.have.length(3);
            expect(arg1).to.be.equal(message1)
            expect(arg2).to.be.equal(message2)
        }
    })
})