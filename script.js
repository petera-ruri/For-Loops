// for (var i=0; i<=100; i+=1) {
//     console.log(i);
//  }

// var total = 0;

// for (var num = 1; num <= 11; num++) {
//     total = total + num;
// }
// console.log("The total is: " + total);

// var fruits = ["mango", "banana", "apple", "cherry", "orange"];

// for (var i=0; i<fruits.length; i++) {
//     console.log(fruits[i])
// }

// let myName = document.querySelector('#name')
// let myAge = document.querySelector('#age')
// let myJob = document.querySelector('#job')

var data = {
    Name: "John",
    Age: 28,
    Job: "Violinist"
}
// console.log(data["job"])

for (var key in data) {
    console.log(key, data[key])
    document.querySelector(`#${key}`).textContent = `${key}: ${data[key]}`
}

console.log('hello')

// myName.textContent = data.name
// myAge.textContent = data.age
// myJob.textContent = data.job