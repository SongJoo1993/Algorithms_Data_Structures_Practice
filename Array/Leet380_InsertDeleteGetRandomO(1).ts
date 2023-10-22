
/*********************************************************************** 
From LeetCode
380. Insert Delete GetRandom O(1)
https://leetcode.com/problems/insert-delete-getrandom-o1/
Date: 2023-10-22

Implement the RandomizedSet class:

    RandomizedSet() Initializes the RandomizedSet object.
    bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
    bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Constraints:
- -231 <= val <= 231 - 1
- At most 2 * 105 calls will be made to insert, remove, and getRandom.
- There will be at least one element in the data structure when getRandom is called.
*/

// Attempt Number: 1
// Logic: Since time complexity O(1), we use Set objects as its "set.has()" has the time complexity of O(1) while Array.includes() has time complexity of O(n). 
// Time Complexity: 

class RandomizedSet {
    private set : Set<number>;
    private array: number[];

    constructor() {
        this.set = new Set<number>();
        this.array = [];
    }

    insert(val: number): boolean {
        if(this.set.has(val)) {
            return false;
        }
        this.set.add(val);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        if(!this.set.has(val)) {
            return false;
        }
        this.set.delete(val);
        const i = this.array.indexOf(val);
        this.array[i] = this.array[this.array.length -1];
        this.array.pop();
        return true;
    }

    getRandom(): number {
        return this.array[Math.floor(Math.random() * this.array.length)]
    }
}