const expect = require('chai').expect
describe('测试： Javascript的class定义', () => {
    class User {
        constructor(uname) {
            this.uname = uname;
        }

        get email() { return this._email.toUpperCase() }

        set email(email) { this._email = email }

        sayHello() {
            return `hello ${this.uname}`
        }

        static staticMethod() {
            return this.staticProperty
        }
    }

    it('使用Class关键字，可以更加方便的定义js中的class，constructor为构造函数', () => {
        let userName = 'adam'
        let user = new User(userName)
        expect(user.uname).to.be.equal(userName)
    })

    it('name是Class的特殊属性，返回类的名称', () => {
        expect(User.name).to.be.equal("User")
    })

    it('使用get和set，可以自定义属性的读取和赋值行为', () => {
        let email = 'hello@abc.com'
        let user = new User('test');

        user.email = email;
        expect(user.email).to.be.equal(email.toUpperCase())
    })

    it('类的静态方法，不能使用类的实例调用(在Java中可以调用)', () => {
        function fn() {
            let user = new User('test');
            return user.staticMethod();
        }
        expect(fn).to.throw(TypeError, 'is not a function');
    })
    it('类的静态属性，不能通过实例访问(在Java中可以调用访问)', () => {
        let testString = 'hello'
        User.staticProperty  = testString
        let user = new User('test');

        expect(user.staticProperty).to.be.equal(undefined)
        delete User.staticProperty
    })
    it('类的静态方法中的this, 指向类本身，而不是类的实例(在Java中是语法错误)', () => {
        let user = new User('test');
        expect(User.staticMethod()).to.be.equal(undefined)

        let testString = 'hello'
        User.staticProperty  = testString
        expect(User.staticMethod()).to.be.equal(testString)
        delete User.staticProperty
    })

    class WrongStudentClass extends User {
        constructor(grade) {
            this.grade = grade
        }

    }
    it('通过extends可以继承类，但在constructor必须调用父类的构造函数', () => {
        function fn() {
            let student = new WrongStudentClass()            
        }
        expect(fn).to.throw(ReferenceError, 'Must call super constructor in derived class')
    })

    class Student extends User {
        constructor(name, grade) {
            super(name)
            this.grade = grade
        }
    }

    it('通过super, 可以访问父类的实例方法', () => {
        let student = new Student('test', 5)
        expect(student.sayHello()).to.be.equal(`hello ${student.uname}`)
    })
})
