const add = (a, b) => {
    console.log(arguments); // error - argument object not available in arrow func unlike es6
}

console.log(add(1, 2, 3))

const user = {
    name: "Andrew",
    cities: ['Dublin', 'NY'],
    places: function () {
        console.log(this.name);
        console.log(this.cities)
        const that = this.
            this.cities.forEach(function (city) {
                console.log(this.name + " lived in" + city); // this - no longer bound
                console.log(that.name + " lived in" + city); // that bound
            })
        this.cities.forEach((city) => {
            console.log(this.name + " lived in" + city); // this bound
        })
    }
}

user.places();

const multipier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}

console.log(multipier.multiply())