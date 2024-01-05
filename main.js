//1. Two Sum
// https://leetcode.com/problems/two-sum/
//   @param {number[]} nums
//   @param {number} target
//   @return {number[]}
// var twoSum = function(nums, target) {
//     var mp = new Map()
//     for(var i=0; i<nums.length; i++){
//      let diff = target - nums[i];
//       if (mp.has(diff)) {
//              return [i, mp.get(diff)]
//          }

//          mp.set(nums[i], i);
//     }
//  };

//********************* 2 ********************************
// https://leetcode.com/problems/add-two-numbers/
// function ListNode(val, next) {
//     val = (val === undefined ? 0 : val);
//     next = (next === undefined ? null : next);
// }

// l1 = new ListNode(5);
// l1.next = new ListNode(8);
// l1.next.next = new ListNode(1);


// l2 = new ListNode(3);
// l2.next = new ListNode(4);
// l2.next.next = new ListNode(4);

// var addTwoNumbers = function(l1, l2) {
//     var List=new ListNode(0);
//     var head=List;
//     var sum=0;
//     var carry=0;
//     while(l1!==null||l2!==null||sum>0){
//         if(l1!==null){
//              sum = sum + l1.val;
//              l1 = l1.next;
//          }
//          if(l2!==null){
//              sum = sum + l2.val;
//              l2 = l2.next;
//          }
//          if(sum>=10){
//              carry = 1;
//              sum = sum - 10;
//          }

//         head.next = new ListNode(sum);
//          head = head.next;

//          sum = carry;
//          carry = 0;
//     }
//       return List.next;
//  };

//************************ 3 *****************************
//1.Sort array
//2 find median
// var findMedianSortedArrays = function (nums1, nums2) {
//     var fullArr = nums1.concat(nums2);
//     for (var i = 0; i < fullArr.length; i++) {
//         for (var j = 0; j < fullArr.length; j++) {
//             var temp = 0;
//             if (fullArr[i] < fullArr[j]) {
//                 temp = fullArr[i];
//                 fullArr[i] = fullArr[j];
//                 fullArr[j] = temp
//             }

//         }
//     }
//     if (fullArr.length % 2 == 1) {
//         var result=fullArr[(fullArr.length-1)/2]
//        return result
//     }else{
//         var len=fullArr.length/ 2
//         var eded1 = fullArr[len] //3
//         var eded2 = fullArr[len-1] //2
//         var result=Number.parseInt(eded1+eded2)/2
//         return result
//     }
// };

// var nums1 =[1,3]; var nums2 = [2]

// findMedianSortedArrays(nums1, nums2)

//*********************** 704 ******************************
//https://leetcode.com/problems/binary-search/description/
// var search = function(nums, target) {
//     var start=0;
//     var end=nums.length-1;
//     var middle=Math.floor((start+end)/2);  //0+5/2=2.5
//     while(target!==nums[middle] && start<=end){
//           if(target<nums[middle]){
//               end=middle-1;
//           }else{
//               start=middle+1
//           }
//           middle=Math.floor((start+end)/2);
//     }
//     if(nums[middle]==target){
//         return middle;
//     }
//     return -1;
// };

//*********************** 34 ******************************

//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4147878/video-give-me-10-minutes-how-we-think-about-a-solution-binary-search/
// var searchRange = function(nums, target) {
//     const binarySearch = (nums, target, isSearchingLeft) => {
//         let left = 0;
//         let right = nums.length - 1;
//         let idx = -1;

//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);

//             if (nums[mid] > target) {
//                 right = mid - 1;
//             } else if (nums[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 idx = mid;
//                 if (isSearchingLeft) {
//                     right = mid - 1;
//                 } else {
//                     left = mid + 1;
//                 }
//             }
//         }

//         return idx;
//     };

//     const left = binarySearch(nums, target, true);
//     const right = binarySearch(nums, target, false);

//     return [left, right];    
// };



//Eolimp
//https://www.eolymp.com/en/problems/11244

// var arr = [1, 3, 5, 6, 8, 10, 11, 11, 11, 16]
// var target = 13;

// function TwoSum(arr, target) {
//     var newArr=[]
//     var left = 0, 
//     right = arr.length - 1; //8
//     while (left<right) {
//         var currentSum=arr[left] + arr[right];
//         if (currentSum === target) { //17==13
//             newArr.push(left)
//             newArr.push(right)
//             return newArr;
//         } else if (currentSum < target) {  //17<13
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return "NO";
// }


// 643. Maximum Average Subarray I Leetcode
// https://leetcode.com/problems/maximum-average-subarray-i/
// var findMaxAverage = function (nums, k) {
//     if(k<0 || k>nums.length) return null;
//     if(nums.length==1) return nums[0]
//     var maxAvg= -Infinity;
//     var currentSum=0;
//      for(var i=0; i<nums.length;i++){
//          currentSum+=nums[i];
//         if(i>=k-1){
//             maxAvg=Math.max(maxAvg,currentSum);
//             currentSum-=nums[i-(k-1)];
//         }
//      }
//     return maxAvg/k;
// };

// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// var lengthOfLongestSubstring = function(s) {
//     var map=new Map();
//     var longestStr=0;
//     var left=0;
//     var right=0;
//     while(right<s.length){
//          var letter=s[right]
//          if(!map.has(letter)){
//              map.set(letter);
//              longestStr=Math.max(longestStr,map.size);
//              right++;
//          }else{
//              map.delete(s[left]);
//              left++;
//          }
//     }
//     return longestStr
// };

//https://leetcode.com/problems/logger-rate-limiter/description/?envType=featured-list&envId=top-google-questions%3FenvType%3Dfeatured-list&envId=top-google-questions
//359. Logger Rate Limiter
// this.map = new Map()  
// Logger.prototype.shouldPrintMessage = function(timestamp, message) {
//     if (this.map.has(message)) {        
//         if (timestamp < this.map.get(message) + 10) {
//             return false
//         }
//     }

//     this.map.set(message, timestamp)
//     return true  
// };

// Logger.prototype.shouldPrintMessage(["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"],[[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]])

//https://leetcode.com/problems/house-robber/description/
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    let n = nums.length;

    let p1 = nums[0]; //2
    let p2 = Math.max(p1, nums[1]);
    let max = 0;
    for (var i = 2; i < n; i++) {
        max = Math.max(p1 + num[i], p2); 10, 11
        p1 = p2;
        p2 = max;
    }

};

// var nums = [2,7,9,3,1]
// rob(nums)

// https://leetcode.com/problems/climbing-stairs/description/
var climbStairs = function (n) {

    if (n == 1) {
        return 1;
    }
    var dp = [0];
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

climbStairs(5);


// https://leetcode.com/problems/edit-distance/description/

var minDistance = function (word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
};

minDistance("horse", "ros")


//https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function (s) {
    if (s.length % 2 === 1) return false

    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false

    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false


    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
            
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }

    }
    return stack.length === 0

};

isValid("(}");


//https://leetcode.com/problems/baseball-game/submissions/
var calPoints = function(operations) {
    
    let newArr=[];

    for(var i=0;i<operations.length;i++){
        if (operations[i] != 'C' && operations[i] != 'D' && operations[i] != '+') {
            let value = parseInt(operations[i])
            newArr.push(value)
        }

        if (operations[i] == "C") {
            newArr.pop()
        }else if (operations[i] === "D") {
            let value = newArr[newArr.length - 1] * 2
            newArr.push(value)
        } else if (operations[i] === "+") {
            let newValue = newArr[newArr.length - 1] + newArr[newArr.length - 2]
            newArr.push(newValue)
        }
    }
    let total = newArr.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    return total

};

//https://leetcode.com/problems/asteroid-collision/description/

var asteroidCollision = function(asteroids) {
    const n = asteroids.length;
        const s = [];
        for (let i = 0; i < n; i++) {
            if (asteroids[i] > 0 || s.length === 0) {
                s.push(asteroids[i]);
            } 
            else {
                while (s.length > 0 && s[s.length - 1] > 0 && s[s.length - 1] < Math.abs(asteroids[i])) {
                    s.pop();
            }
            if (s.length > 0 && s[s.length - 1] === Math.abs(asteroids[i])) {
                s.pop();
            } 
            else {
                if (s.length === 0 || s[s.length - 1] < 0) {
                    s.push(asteroids[i]);
                }
            }
            }
        }
        const res = new Array(s.length);
        for (let i = s.length - 1; i >= 0; i--) {
            res[i] = s.pop();
        }
        return res;
    };
