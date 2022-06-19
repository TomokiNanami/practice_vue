
// class について
class MyObject {
    constructor(r, g, b) {
        this.red = r
        this.green = g
        this.blue = b
    }

    get total() {
        return this.red + this.green, this.blue
    }

    get hex() {
        return '#' + ('00' + this.red.toString(16)).substr(-2)
            + ('00' + this.green.toString(16)).substr(-2)
            + ('00' + this.blue.toString(16)).substr(-2)
    }

    get startP() {
        return '<p style="background-color:' + this.hex+ '">'
    }

    get endP() {
        return '</p>'
    }

    writeP() {
        console.log(this.startP + this.total + this.endP)
    }
}

let ob = new MyObject(255, 200, 200)
ob.writeP()

let ob2 = new MyObject(0, 100, 170)
ob2.writeP()

alert(ob.total())

