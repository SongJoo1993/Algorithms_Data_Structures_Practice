# Algorithms_Data_Structures_Practice
A repository for mastering algorithms, data structures, and problem-solving skills

## Topics

- [Array](#array)
- [Two Pointers](#two-pointers)
- [Hashmap](#hashmap)
- [Intervals](#intervals)
- [Stack](#stack)
- [Linked List](#linked-list)
- [Binary Search](#binary-search)


### Array

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet88  | Merge Sorted Array                  | [JavaScript](Array/Leet88_MergedSortedArray.js)                      | O(m + n)        | 54 ms (80.54%)   | 41.7 mb (86.42%)    | Merge nums1 and nums2 into a single array sorted in non-decreasing order.   |  Easy |  
|  Leet27  | Remove Element                      | [JavaScript](Array/Leet27_RemoveElement.js)                          | O(n)            | 62 ms (40.2%)    | 41.3 mb (95.90%)    | Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. |  Easy |
|  Leet26  | Remove Duplicates from Sorted Array | [JavaScript](Array/Leet26_RemoveDuplicatesSortedArray.js)            | O(n)            |  272 ms (5.1%)   | 51.5 mb (5.4%)      | Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place. |  Easy |
|  Leet169 | Majority Element                    | [JavaScript](Array/Leet169_MajorityElement.js)                       | O(n)            |  62 ms (79.68%)  | 43.8 mb (58.34%)    | Given an array nums of size n, return the majority element.                 |  Easy |
|  Leet121 | Best Time to Buy and Sell Stock     | [JavaScript](Array/Leet121_BestTimeBuySellStock.js)                  | O(n)            |  60 ms (99.63%)  | 51.5 mb (65.64%)    | Given an array prices where prices[i] is the price of a given stock on the ith day, return the maximum profit you can achieve from this transaction.|  Easy |
|  Leet13  | Roman to Integer                    | [JavaScript](Array/Leet13_RomanToInteger.js)                         | O(n)            |  111 ms (94.33%) | 47.9 mb (36.43%)    | Given a roman numeral, convert it to an integer.                 |  Easy   |
|  Leet58  | Length of Last Word                 | [JavaScript](Array/Leet58._LengthofLastWord.js)                      | O(n)            |  37 ms (99.84%)  | 41.9 mb (63.49%)    | Given a string s consisting of words and spaces, return the length of the last word in the string.                 | Easy   |
|  Leet14  | Longest Common Prefix               | [JavaScript](Array/Leet14._LongestCommonPrefix.js)                   | O(n2)           |  51 ms (94.5%)   | 43.7 mb (20.78%)    | Write a function to find the longest common prefix string amongst an array of strings.                 |  Easy   |
|  Leet28  | Find the Index of the First Occurrence in a String | [JavaScript](Array/Leet28_FindFistIndexOccurrenceInString.js)                   | O(n2)           |  46 ms (96.72%)   | 41.1 mb (98.78%)    | Write a function to find if the argument exits in the first argument and return the index where it is found.                 |  Easy   |
|  Leet80  | Remove Duplicates from Sorted Array II | [JavaScript](Array/Leet80_RemoveDuplicatesfromSortedArrayII.js)                   | O(n)           |  58 ms (82.70%)   | 44.1 mb (45.83%)    | Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.                 |  Medium   |
|  Leet189  | Rotate Array | [JavaScript](Array/Leet189_RotateArray.js)                   | O(n)           |  72 ms (94.57%)   | 51.4 mb (70.57%)    | Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.                 |  Medium   |
|  Leet122  | Best Time to Buy and Sell Stock II | [JavaScript](Array/Leet122_BestTimetoBuyandSellStockII.js)                   | O(n)           |  47 ms (94.73%)   | 41.9 mb (82.42%)    | Given an integer array nums, Find and return the maximum profit you can achieve.                 |  Medium   |
|  Leet55  | JumpGame | [JavaScript](Array/Leet55_JumpGame.js)                   | O(n)           |  55 ms (94.15%)   | 45.16 mb (99.83%)    | Given an integer array nums, return true if you can reach the last index, or false otherwise.                 |  Medium   |
|  Leet45  | Jump Game II | [JavaScript](Array/Leet45_JumpGameII.js)                   | O(n)           |  56 ms (78.66%)   | 43.9 mb (59.29%)    | Given an integer array nums, return the minimum number of jumps to reach nums[n - 1].                 |  Medium   |
|  Leet274  | H-Index | [JavaScript](Array/Leet274_H-Index.js)                   | O(n)           |  54 ms (64.05%)   | 41.2 mb (99.20%)    | Given an integer array nums, return the researcher's h-index.                 |  Medium   |
|  Leet380  | Insert Delete GetRandom O(1) | [JavaScript](Array/Leet380_InsertDeleteGetRandomO(1).ts)                   | O(n)           |   320 ms (86.47%)   | 117.2 mb (32.34%)    | Implement the functions of the class such that each function works in average O(1) time complexity.                 |  Medium   |
|  Leet238  | Product of Array Except Self | [JavaScript](Array/Leet238_ProductofArrayExceptSelf.ts)                   | O(n)           |   ms (%)   | mb (%)    | Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].                 |  Medium   |


### Two Pointers

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet125  | Valid Palindrome                  | [JavaScript](Two-Pointers/Leet125_ValidPalindrome.js)                      | O(n)        | 61 ms (92.73%)   | 44.18 mb (88.02%)    | Given a string s, return true if it is a palindrome, or false otherwise.   |  Easy |
|  Leet392  | Is Subsequence                    | [JavaScript](Two-Pointers/Leet392._IsSubsequence.js)                       | O(n)        | 51 ms (91.11%)   | 42.60 mb (17.90%)    | Given two strings s and t, return true if s is a subsequence of t, or false otherwise.   |  Easy |
|  Leet167  | Two Sum II                    | [JavaScript](Two-Pointers/Leet167_TwoSumII.js)                       | O(n)        | 50 ms (90.38%)   | 43 mb (38.79%)    | Given an array and target, return an array of two numbers such that they add up to a specific target number   |  Medium |
|  Leet11  | Container With Most Water                    | [JavaScript](Two-Pointers/Leet11_ContainerWithMostWater.js)                       | O(n)        | 57 ms (92.90%)   | 49.96 mb (21.45%)    | Given an array and target, return the maximum amount of water a container can store   |  Medium |
|  Leet15  | 3 Sum                    | [JavaScript](Two-Pointers/Leet15_3Sum.js)                       | O(n)        | 162 ms (35.26%)   | 58.42 mb (81.80%)    | Given an integer array nums, return all the triplets such that i != j, i != k, and j != k and nums[i] + nums[j] + nums[k] == 0   |  Medium |


### Hashmap

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet383  | Ransom Note                  | [JavaScript](Hashmap/Leet383_RansomNote.js)                      | O(n)        | 81 ms (75.11%)   | 43.08 mb (97.50%)    | Given two strings, return true if first string can be constructed with letters from the second or false.   |  Easy |
|  Leet205  | Isomorphic Strings                  | [JavaScript](Hashmap/Leet205_IsomorphicStrings.js)                      | O(n)        | 62 ms (87.69%)   | 42.92 mb (60.27%)    | Given two strings s and t, determine if they are isomorphic.   |  Easy |
|  Leet290  | Word Pattern                  | [JavaScript](Hashmap/Leet290_WordPattern.js)                      | O(n)        | 47 ms (91.99%)   | 41.6 mb (83.28%)    | Given a pattern and a string s, find if s follows the same pattern.   |  Easy |
|  Leet242  | Valid Anagramn                  | [JavaScript](Hashmap/Leet242_ValidAnagram.js)                      | O(n)        | 64 ms (93.42%)   | 47.4 mb (37.97%)    | Given two strings s and t, return true if t is an anagram of s, and false otherwise.   |  Easy |
|  Leet1  | Two Sum                  | [JavaScript](Hashmap/Leet1_TwoSum.js)                      | O(n)        | 56 ms (90.81%)   | 43.5 mb (20.94%)    | Given an array and an integer target, return indices of the two numbers in an array such that they add up to target.   |  Easy |
|  Leet202  | Happy Number                  | [JavaScript](Hashmap/Leet202_HappyNumber.js)                      | O(n)        | 60 ms (71.19%)   | 44.4 mb (28.18%)    | Check for happy number without cycle.   |  Easy |
|  Leet219  | Contains Duplicate II                  | [JavaScript](Hashmap/Leet219_ContainsDuplicateII.js)                      | O(n)        | 77 ms (96.24%)   | 67 mb (21.28%)    | Find duplicate value in the array using Hashmap.   |  Easy |


### Intervals

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet228  | Summary Ranges                  | [JavaScript](Intervals/Leet228_SummaryRanges.js)                      | O(n)        | 43 ms (96.35%)   | 41.66 mb (86.02%)    | Given a sorted unique integer array nums, return the smallest sorted list of ranges.   |  Easy |
|  Leet56  | Merge Intervals                  | [JavaScript](Intervals/Leet56_MergeIntervals.js)                      | O(n)        | 93 ms (82.48%)   | 47.95 mb (97.81%)    | Given an array of intervals, merge all overlapping intervals, and return an array of the non-overlapping intervals.   |  Medium |


### Stack

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet20  | Valid Parentheses                  | [JavaScript](Stack/Leet20_ValidParentheses.js)                      | O(n)        | 45 ms (98.15%)   | 41.76 mb (92.43%)    | Given a string input, determine if the input string is valid.   |  Easy |
|  Leet71  | Simplify Path                  | [JavaScript](Stack/Leet71_SimplifyPath.js)                      | O(n)        | 53 ms (91.15%)   | 43.6 mb (94.35%)    | Given a string input, convert it to the simplified canonical path.   |  Medium |


### Linked List

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet141  | Linked List Cycle                  | [JavaScript](Linked-List/Leet141_LinkedListCycle.js)                      | O(n)        | 57 ms (94.96%)   | 45.2 mb (45.51%)    | Given head, the head of a linked list, determine if the linked list has a cycle in it.   |  Easy |
|  Leet21   | Merge Two Sorted Lists                  | [JavaScript](Linked-List/Leet21_MergeTwoSortedLists.js)                      | O(n)        | 60 ms (73.56%)   | 43.84 mb (74.68%)    | Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.   |  Easy |
|  Leet2    | Add Two Numbers                  | [JavaScript](Linked-List/Leet2_AddTwoNumbers.js)                      | O(n)        | 91 ms (70.72%)   | 46.62 mb (95.45%)    | Add the two numbers and return the sum as a linked list.   |  Easy |


### Binary Search

|    No    | Title                               | Language                                                             | Time Complexity | Run Time (Beat Rate)                   | Memory (Beat Rate)   | Description  | Level | 
| :------: | ----------------------------------- | -------------------------------------------------------------------- | --------------- | -------------------------------------- | ------------------- | ------------ | ----- | 
|  Leet35  | Search Insert Position                  | [JavaScript](Linked-List/Leet35._SearchInsertPosition.js)                      | O(n)        |  51 ms (58.95%)   |  41.80 mb (82.11%)    | Using binary search alg and two pointers (low and high), return the index of target.   |  Easy |
|  Leet74  | Search a 2D Matrix                  | [JavaScript](Linked-List/Leet74._Searcha2DMatrix.js)                      | O(log(M) + log(N))        |  46 ms (86.01%)   |  41.94 mb (62.75%)    | Given an m x n integer matrix, return true if target is in matrix or false otherwise   |  Medium |