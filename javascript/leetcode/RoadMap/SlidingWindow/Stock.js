

const maxProfit = function(prices) {
    
    let left = 0;
    let right = 1;

    let maxProfitRes = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = prices[right] - prices[left];
            if (profit > maxProfitRes) {
                maxProfitRes = profit;
            }
        } else {
            left = right;
        }
        right++;
    }
    return maxProfitRes;
}


console.log(maxProfit([2,10,1,6]));


//          NeetCode Solution
//          let l = 0;
//          let r = 1;
//          let maxP = 0;

//          while (r < prices.length) {
                // if (prices[l] < prices[r]) {
                //     profit = prices[r] - prices[l];
                //     maxP = maxP.max(maxP, profit);
                // } else {
                //     l = r;
                // }
                // r++;
//          }