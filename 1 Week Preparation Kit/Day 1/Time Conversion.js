// Given a time in

// -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

//     Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

//     string s: a time in

//     hour format

// Returns

//     string: the time in

//     hour format

// Input Format

// A single string
// that represents a time in -hour clock format (i.e.: or

// ).

// Constraints

//     All input times are valid

// Sample Input

// 07:05:45PM

// Sample Output

// 19:05:45




function timeConversion(s) {

    s = s.split(':');

    let b = s[2].split('')
    let j = s[2].slice(s[2].length - 2, s[2].length)
    b.splice(s[2].length - 2, s[2].length).join('')
    b = b.join('')
    const c = +s[0]
    const h = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];
    const getHour = x => [h[c + x], s[1], b].join(':')

    return ((j === 'AM' && c >= 12) || (j === 'PM')) ? getHour(11)
        : (j === 'PM' && c === 12) ? getHour(-1) : (j === 'PM') ? getHour(11) : getHour(-1)

}
console.log(timeConversion('7:05:5PM'))