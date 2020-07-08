module.exports = class MiddleWare { 
    constructor () { 
        this.middleware = []
    }

    static of() { 
        return new MiddleWare();
    }

    map() { 
        return MiddleWare.of()
    }

    use(fun) { 
        this.middleware.push(fun)
    }


}