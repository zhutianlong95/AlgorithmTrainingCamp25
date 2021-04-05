/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  //外层循环计算出差值
  for(var i = 0;i<nums.length;i++) {
      var dif = target - nums[i]
      for(var j = i+ 1;j<nums.length;j++) {
          if(dif == nums[j]) return [i, j]
      }
  }
};