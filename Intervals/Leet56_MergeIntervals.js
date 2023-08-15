/*********************************************************************** 
From LeetCode
56. Merge Intervals
https://leetcode.com/problems/merge-intervals
Date: 2023-08-15

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Constraints:
- 1 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 104
*/

// Attempt Number: 1 (Failed)
// Logic:
// Iterate through each element and go through below conditions:
// If intervals[i][1] >= intervals[i+1][0]:
//  true: save intervals[i][0],intervals[i+1][1] in temp array
//  false: push temp to result and intervals[i] too
// Time Complexity: O(n)
var merge = function(intervals) {
    let temp = [], result =[];
    for(let i = 0; i < intervals.length; i++) {
        if(i != intervals.length -1) {
            if(intervals[i][1] < intervals[i+1][0]) {
                if(temp.length === 0) {
                    result.push(intervals[i]);
                }else {
                    result.push(temp);
                }
                temp = [];
            } else if(intervals[i][1] >= intervals[i+1][0] && temp.length == 0) {
                if(intervals[i][0] > intervals[i+1][0]) {
                    temp.push(intervals[i+1][0],intervals[i+1][1]);
                }else {
                    temp.push(intervals[i][0],intervals[i+1][1]);
                }
            } else {
                temp.push(temp[0],intervals[i+1][1]);
            }
        }
        else {
            if(temp.length === 0) {
                result.push(intervals[i]);
            }else {
                result.push(temp);
            }
        }
    }
    return result;
};


// Attempt Number: 2 (Passed)
// Logic: 
// 1. Sort the input array in ascending order and return empty array if no elements in the array.
// 2. Updating temporary array by comparing its value to the current array's values.
// 3. Merge the temporary array if the current array's elements are all bigger than the temporary and set the current as new temporary array.
// Time Complexity: O(n)
var merge = function(intervals) {
    let result = [];
    if(intervals.length === 0) return result;
    intervals.sort((a,b) => a[0] - b[0]);
    
    let temp = intervals[0];
    for(let i = 1; i < intervals.length; i++) {
        if(temp[1] >= intervals[i][0]) {
            temp[1] = Math.max(temp[1],intervals[i][1]);
        } else {
            result.push(temp);
            temp = intervals[i];
        }
    }
    result.push(temp);
    return result;
};