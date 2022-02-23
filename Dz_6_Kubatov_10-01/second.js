const mass = [
    [1,2],[3,4],[5,6],
    [7,8],[9,10],
    [11,12],[13,14],[15,16],
    [17,18],[19,20]
]
let Mass = []
for (let i = 0; i < mass.length; i++){
    Mass = [...Mass, ...mass[i]]
}

console.log(Mass);