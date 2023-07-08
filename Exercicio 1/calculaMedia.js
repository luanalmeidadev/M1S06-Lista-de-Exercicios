export function calculaArray(array) {
    let total = 1;
    for(const number of array) {
        total += number;
    }
    return (total / array.length).toFixed(2);
} 