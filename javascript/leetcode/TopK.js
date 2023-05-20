var topK = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let keyToUpdate = nums[i];
            let currentValue = map.get(keyToUpdate);
            let updatedValue = currentValue + 1;
            map.set(keyToUpdate, updatedValue);
        } else {
            map.set(nums[i], 1);
        }
    }
    let mapKeys = [];
    let mapVals = [];
    map.forEach((value, key) => {
        if (map.size === 1) {
            mapKeys.push(key);
        } else {
            mapKeys.push(value);
        }
    });
    // console.log(mapKeys);

    for (let i = 0; i < mapKeys.length; i++) {
        if (mapKeys.length > 1) {
            let temp = mapKeys[i-1];
            if (mapKeys[i-1] < mapKeys[i]) {
                mapKeys[i-1] = mapKeys[i];
                mapKeys[i] = temp;
            }
        }
    }
    if (mapKeys.length <= 1) {
        mapVals.push(mapKeys[0]);
    } else {
        console.log(mapVals.push(map.get(mapKeys[0])));
        console.log(mapVals.push(map.get(mapKeys[1])));
    }
    return mapVals;
}

// topK([-1],1);
console.log(topK([1,2],2));