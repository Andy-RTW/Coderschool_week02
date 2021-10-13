var array = [];
var b = []
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    for (var i = 1; i < 100; i++) {
        var a = Math.floor(Math.random() * (max - min + 1) + min);
        if (a % 2 !== 0) {
            array.push(a)
        } else {
            b.push(a)
        }
    }
    console.log(b)
    console.log(array)
}
getRandomIntInclusive(0, 100)

console.log(array)



