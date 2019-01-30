
// Arrays

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

document.write(names[2]);
document.write(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
document.write(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
document.write(john);