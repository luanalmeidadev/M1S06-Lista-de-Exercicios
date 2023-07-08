export function somaArray(array) {
    let total = 0;

    for(const number of array) {
        total += number;
    }
    return total;
} 