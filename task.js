// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"
*/


console.log('\nTask 1\n------\n');

let fs = require('fs');
let json = fs.readFileSync('users1.json');
let users1 = JSON.parse(json);

function numberCheck(users) {
    for(let i in users) {
        if(users[i].phoneNumber.match(/^[0-9]+$/) != null) {
            console.log('Phone number of User with userId ' + users[i].userId + ': true');
        }
        else {
            console.log('Phone number of User with userId ' + users[i].userId + ': FALSE');
        }
        i++;
    }
}
numberCheck(users1.users);


/*
Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/


//I'm not going to import users from users1.json again and just use the import from Task 1

console.log('\n\nTask 2\n------');

const users2 = require('./users2.js');

function compareUsers(users1, users2) {
    let howManyFields;
    let compareField;
    for(let i in users1) {
        howManyFields = Object.keys(users1[i]).length;
        for(let j = 1; j < howManyFields; j++) {
            compareField = Object.keys(users1[i])[j];
            if(users1[i][compareField] != users2[i][compareField]) {
                console.log('\nDifferent values between users with Id: ' + users1[i].userId + ' on field: ' + compareField);
                console.log('1st ' + compareField + ': ' + users1[i][compareField]);
                console.log('2nd ' + compareField + ': ' + users2[i][compareField]);
            }
        }
        i++;
    }
}

compareUsers(users1.users, users2.users);