//Variables
let roll_number = 24;
let student_name = "Umair Afzal";
const cnic_number = "0000";
//console.log(roll_number);

//Array 1
const student = ["Umair", 24, "0000"];
//console.log(student);

//Array2
const stu = {
  name: "Umair",
  age: 24,
  rollNumber: "0000",
};
//console.log(stu);

//Object
const umair = {
  firstName: "Umair",
  lastName: "Afzal",
  age: 21,
  rollNumber: 24,
};
//console.log(umair);

//Function to check number
function checkNumber(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    console.log("Please provide a valid number.");
    return;
  }

  if (num > 0) {
    console.log(`${num} is positive.`);
  } else if (num < 0) {
    console.log(`${num} is negative.`);
  } else {
    console.log(`${num} is zero.`);
  }
}

//checkNumber(0);    


//Loop 
for (let i = 0; i <= 10; i++) {
    //console.log(i);
}

