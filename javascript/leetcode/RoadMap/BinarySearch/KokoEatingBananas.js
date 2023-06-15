// pile / k
// 1 + 1 + 2 + 2 = 6

const minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let res = 0;
    while (left <= right) {
        let k = Math.ceil((left + right)/2);
        // console.log(k);
        let check = 0;
        for (let i = 0; i < piles.length; i++) {
            check += Math.ceil(piles[i]/k);
        }
        console.log(check);
        if (check <= h) {
            res = (k);
            // res = Math.min(res, k);
            right = k - 1;
        }
        if (check > h) {
            left = k + 1;
        }
    }
    return res;
}


console.log(minEatingSpeed([30,11,23,4,20], 6));
