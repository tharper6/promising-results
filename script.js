// slowMath.add(1, 1)
//     .then((results) => {
//         console.log(results);
//         return slowMath.multiply(results, 2)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.multiply(results, 4)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.subtract(results, -3)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.add(results, 98)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.remainder(results, 2)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.multiply(results, 50)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.remainder(results, 40)
//     })
//     .then((results) => {
//         console.log(results);
//         return slowMath.add(results, 32)
//     })
//     .then((results) => {
//         console.log(results);
//         console.log(`The final results is ${results}`)
//     }).catch((err) => {
//         let errMsg = new Error(`You fudged up!`)
//         console.log(errMsg)
//         console.log(err)
//     })


let doMath = async () => {
    try {
        let result = await slowMath.add(6, 2)
        console.log(result);
        let result1 = await slowMath.multiply(result, 2)
        console.log(result1)
        let result2 = await slowMath.divide(result1, 4)
        console.log(result2);
        let result3 = await slowMath.subtract(result2, 3)
        console.log(result3);
        let result4 = await slowMath.add(result3, 98)
        console.log(result4);
        let result5 = await slowMath.remainder(result4, 2)
        console.log(result5);
        let result6 = await slowMath.multiply(result5, 50)
        console.log(result6);
        let result7 = await slowMath.remainder(result6, 40)
        console.log(result7);
        let result8 = await slowMath.add(result7, 32)
        console.log(result8);
        console.log(`The final result is ${result8}`)
    } catch (err) {
        console.log(err)
    }
}
doMath()
