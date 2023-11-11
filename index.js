var {subtract, multiply, divide, add} = require('lodash');

const quadratic = (a, b, c) => {
    let result = []
    if (a === 0) return result
    const D = subtract(multiply(b,b), multiply(4, multiply(a,c)))
    if (D < 0) return result
    if (D === 0) {
        result.push(divide(add(-b, Math.sqrt(D)), multiply(2,a)))
    } else if (D > 0) {
        result.push(divide(add(-b, Math.sqrt(D)), multiply(2,a)))
        result.push(divide(subtract(-b, Math.sqrt(D)), multiply(2,a)))
    }
    return result
}

const quadraticWithDiscriminant = (a, b, c) => {
    let result = {
        discriminant: null,
        roots: []
    }
    if (a === 0) return result
    const D = subtract(multiply(b,b), multiply(4, multiply(a,c)))
    if (D < 0) return result
    result.discriminant = D
    if (result.discriminant === 0) {
        result.roots.push(divide(add(-b, Math.sqrt(D)), multiply(2,a)))
    } else if (result.discriminant > 0) {
        result.roots.push(divide(add(-b, Math.sqrt(D)), multiply(2,a)))
        result.roots.push(divide(subtract(-b, Math.sqrt(D)), multiply(2,a)))
    }
    return result
}

module.exports = {
    quadratic,
    quadraticWithDiscriminant
}
