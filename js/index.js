const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
alert('You have entered ' + a + ' , ' + b + ' , ' + c);

const result = solveQard(a, b, c);
alert (result) ;

function solveQard (a, b, c) {
    const d = calcDiscr (a, b, c);
    if (d ===0) {
        const x = -b/(2*a);
        return 'We have only one result : x1 = ' + x;
    }
    if (d>0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'We have two result : x1= ' + x1 + ' , x2 = ' + x2 ;
    } else if (d<0) {
        return 'The discriminant is lass than zero' ;
    }
}
    
function calcDiscr(a, b, c) {
    return b * b - 4 * a * c ;
}