// = = = = = = = = = = = = = = = = = = =
// Going to finish this at a later time
// = = = = = = = = = = = = = = = = = = =

const maxProfit = function(prices) {
    // Create varibale called maxProfit, set it = 0.
    let maxProfit = 0;
    // Set an empty array of differences 
    let differences = [];
    // Loop through prices
    let temp = 0;
    for (let i = 0; i < prices.length; i++) {
        // Loop through array again, adding the difference between prices[j] - prices[i] to differences array
        for (let j = 0; j < prices.length; j++) {
            // Make sure that this is only for the first iteration
            if (i === 0) {
                console.log(i + " : " + j);
                if (prices[j] > prices[i]) {
                    temp++;
                }
            } else {
                if (j > i) {
                    differences.push(prices[j]-prices[i]);
                }
            }
            // To add difference, j must be greater than i 
        }
        if (temp === 0) {
            return temp;
        }
    }
    // Iterate through differences, returning the largest value
    for (let i = 0; i < differences.length; i++) {
        // Adding the largest value, must be greater than 0
        if (differences[i] > 0 && differences[i] > maxProfit) {
            maxProfit = differences[i];
        }
    }
    console.log(maxProfit);
}
// -6,-2,-4,-1,-3
// 4,2,5,3
// -2,1,-1
// 


console.log(maxProfit([7,6,9,5,4,3,2,1]));
                    // 0,1,2,3,4,5