//1. Two Sum
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

