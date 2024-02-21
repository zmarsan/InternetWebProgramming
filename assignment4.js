/* What is javascript? How does an interpreted programming language differ from a
compiled language?

Javascript is a programming language that helps to add interactivity and behavioral changes to a webpage. It is an interpreted
programming language, which differs from the average compiled language as it is read and interpreted without the use of a compiler. In compiled languages, the
machine code is typically unreadable and extremely difficult to understand by humans. Interpreted languages do not require machine instructions.

2. What is the difference between var, let, and const when declaring variables?

Var is the declaration of a variable that is globally/locally scoped, and it is the old-school way to define variables. They can be redeclared and updated.
Let is the declarition of a variable that is block scoped. It is more commonly used today, and it's variable can be updated but not redeclared.
Const is also the declaration of a variable that is block scoped, but cannot be updated nor can it be redeclared.

3. What are anonymous functions? Higher order functions?

An anonymous function is a function with no name. A higher order function is one that either returns a function, or utilizes a function as one of its arguments.

4. Define objects in JavaScript and how they are different from objects in more traditional
OOP languages.

A JavaScript object is a data structure that consists of key value pairs, and is a collection of properties. This differs from more traditional OOP languages, like C++ for instance,
where objects are very heavily connected with the idea of classes. Classes do not have a link to objects in JavaScript

*/

const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    }
];


const availableCats = [];

for (let i = 0; i < cats.length; i++)
{
      if (cats[i].adoptionStatus === 'available') 
{
  
  availableCats.push(cats[i].name);
}
}
console.log('Congratulations!! You have adopted the following cats: ');
console.log(availableCats);
