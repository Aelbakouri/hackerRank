// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// The unique element is

// .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

//     int a[n]: an array of integers
 
// Returns

//     int: the element that occurs only once

// Input Format

// The first line contains a single integer,
// , the number of integers in the array.
// The second line contains space-separated integers that describe the values in

// .

// Constraints

// It is guaranteed that
// is an odd number and that there is one unique element.
// , where .

function lonelyinteger(a) {

    const c = []
    a.sort((a, b) => a - b)
    for (let i = 0; i < a.length; i++) {
        !(a[i] === a[i + 1]) ? c.push(a[i]) : ''
        i++
    }
    return c[0]


}
console.log(lonelyinteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31,]))//44
