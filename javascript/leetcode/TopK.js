var topK = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let keyToUpdate = nums[i];
            let currentValue = map.get(keyToUpdate);
            let updatedValue = currentValue + 1;
            map.set(keyToUpdate, updatedValue);
            // console.log(map.get(updatedValue));
        } else {
            map.set(nums[i], 1);
        }
    }
    let result = [];

    const entries = Array.from(map);
    entries.sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        result.push(entries[i][0])
    }
    return result;
}
// topK([-1],1);
console.log(topK([3,0,1,0,3,3,1,1],2));