/*
    STRING SEARCH ALGORITHM ITERATIVE APPROACH 
    NOT A GOOD APPROACH, O(N2) QUADRATIC
*/

const stringSearch = (long = "", short = "") => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[j + i]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}
console.log(stringSearch('i litrally loled twice lol', 'lol'));