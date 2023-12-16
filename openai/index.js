// function rem(){
//     prompt('Enter your age')
// }

// function gavi(){
//     confirm('Are you sure you want to continue?')
//     prompt("what's your name?")
//     alert('Welcome to our page')
// }

// function kenny(){
//     // return 4 + 8
//     console.log( 4 + 9);
    
    
// }

// const person = {
//     name: 'Fareed',
//     age:  35,
//     married: false,
//     graduate: null,
//     landlord: 'yes',
//     student: true,
// } 

// console.log(person.landlord);

// const colours = ['red', 'white', 'indigo', 'green', 'yellow']
// colours.pop() removes the last element 
// console.log(colours);  

// colours.push('black') adds to the last element
// console.log(colours);

// colours.shift() removes from the first element 
// console.log(colours);

// colours.unshift('azure') adds to the first Element
// console.log(colours);



// An arrray method that can add to the first element of the array
// An array method that can remove from the first element of the array
// An array method that can add to the last element of the array
// An array method that can remove from the last element of the array

// 1)
// const array = [1, 2, 3]
// array.unshift(7); (works also)
// console.log(array);

// const properties=[
//     'shoes',
//     'shirts',
//     cars=['Porsche', 'Bugatti', 'Toyota', 'Tesla'],
//     houses =['Penthouse', 'Duplex', 'Bungalow'],
//     'Shares',
//     'cash'
// ]
// console.log(properties.length);
// let index = properties.indexOf("Shares"); to find index in an array method-1
// console.log(index);

// console.log(properties[4]);  method-2

// to get values of nested array
// console.log(properties[2][3]);
// console.log(properties [3][1]);

// This is an array of Objects [index is in this ]  
// const players =[
// {
//     name: 'Lionel messi',
//     age: 36,
//     club: 'Inter Miami',
//     country: 'Argentina'
// },
// {
//     name: 'Christiano Ronaldo',
//     age: 38,
//     club: 'Al Nassr',
//     country: 'Portugal'
// },
// {
//     name: 'Reece james',
//     age: 25,
//     club: 'Chelsea',
//     country: 'England'
// },
// {
//     name: 'Cole Palmer',
//     age: 23,
//     club: 'Chelsea',
//     country: 'England'
// }
// ]
// console.log(players[3].name, players[1].country);

// 25th November

// Arithmetic operators
// console.log(5 % 2)    modulus (inerested in the remainder of the arithmetix)
// console.log(5 **2) raised to power or exponential


// Assignment operators =
// a += b  it adds the values and gives the value to the first variable
// let a=6
// let b= 8
// a+=b
// console.log(a+=b)
// console.log(b);

// comparison operator in note 

// string operator
// let x = 'google'
// let z  = '.com'
// console.log('Please visit' + ' ' + x + z)
// prints Please visit 'google.com'

// if statements only executes logic in block of code only when the condition is true
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// let k = 10;
// if(k = 10){
//     console.log('Hello World');
// }

// let k = 10;
// if(k == 6){
//     console.log('Hello World');
// }
// else{
//     console.log('Hello Mars')
// }

// let k = 10;
// if(k == 6){
//     console.log('Hello World');
// }
// else if(k ==9){
//     console.log('Hello Venus');
// }
// else if(k ==10){
//     console.log('Hello Kenny');
// }
// else{
//     console.log('Hello Cube')
// }


// var num = 0;
// console.log(num)
// num ++
// console.log(num)
// num --
// console.log(num)

// Switch statement 
// // calling the function
// decodeColour ('x')  prints green 
// decodeColour (2)  prints red 
// decodeColour (2)  prints yellow
// decodeColour ('default')  prints unknown
// dk what i typed 


// function decodeColour (code) 
//      switch ('code')  {
//     case 1:
//         consol.log ('red');
//         break;
//         case 2:
//             console.log ('Yellow');
//             break;
//             case 'x':
//                 console.log ('Green');
//             default;    
//             console.log('unknown code');
// }
        
// While loop
// let numbers = [19, 65, 1, 2, 8, 10, 15, 3, 2, 4]

// let sum = 0
// let i = 0
// while (i < numbers.length){
//     sum += numbers[i];
//     i += 1;
// }
// console.log(`the loop was executed ${i} times`);
// console.log(sum)

// Do/while loop
// let numbers = [19, 65, 1, 2, 8, 10, 15, 3, 2, 4]

// let sum = 0
// let i = 0
// do {
//     sum += numbers[i];
//     i += 1;
// }
// while (i < numbers.length)
// console.log(`the loop was executed ${i} times`);
// console.log(sum)

// For Loop
// let numbers = [19, 65, 1, 2, 8, 10, 15, 3, 2, 4]

// let sum = 0;

// for(let i = 0; i < numbers.length; i ++){
//     sum += numbers[i];
//     console.log(sum);
// }
// console.log(sum);

// function add(a, b) {
// 	return a + b;
// }
// console.log(add( 5,2))

// let a = 5
// let b = 10

// function add(a, b){
    
// }
// console.log(a + b)


// switch statement bonus

// let favoriteanimal = 'wolf';

// switch (favoriteanimal){
//     case 'cat':
//         console.log('cats are proud');
//         break 
//         case 'goat':
//         console.log('goats are stubborn');
//         break
//         case 'sheep':
//             console.log('sheep are meek')
//             break
//             default:
//                 console.log('this is the only valid statement')
//                 break
// }

var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};
