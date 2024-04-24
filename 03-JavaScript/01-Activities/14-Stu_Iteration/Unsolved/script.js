// WRITE YOUR CODE BELOW

const students = ["bob ", "steve ", "john ", "joe ", "sal "]

console.log(students.length)

// determining how many times to execute the loop using the arrays legnth

// set i = 0  ||| if i is less than the length of students then add 1 (i++)
for (i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students}`);
}

// _-----------------------------------------------------------

// greet each student until array of students is done
for (student of students) {
    console.log(`Great to see you, ${student}`)
}