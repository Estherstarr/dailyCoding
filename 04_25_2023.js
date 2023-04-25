var removeDuplicates = function(nums) {
    let numsHash = {}
    nums.forEach(num => numsHash[num]=num)
    let k = Object.values(numsHash)
    return k
};