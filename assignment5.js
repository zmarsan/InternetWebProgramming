// #1:
const isAdult = true;
const price = isAdult ? "$10.00" : "$5.00"

// #2:
const dog = {

    Breed: "Chihuahua",
    Name: "Roko",
    Age: 10,
    Size: "Small"
};

for (const key in dog)
{
    if (dog.hasOwnProperty(key))
    console.log(`${key}: ${dog[key]}`);
}

//#3 Create an array of numbers. Using the map function, create a second array of those
// numbers squared.

const numArray = [1, 2, 3, 4, 5];
const mapArray = numArray.map((x) => x * x);
console.log(mapArray);


/*
#4

DOM stands for the  Document Object Model, and specifies how different browsers should create an HTML page
and how JavaScript can modify the webpage.

The DOM tree is a model of a browser loaded web page. It consists of four types of nodes, including the document node, 
the element node, the attribute node, and the text node. 

#5

A XSS attack is a cross-site scripting attack, allowing an attacker to gain access to your accounts. 
It works by having users add code that is generated as HTML - and then later that code is run.

You can prevent an XSS attack by being careful of content treated as HTML - and not have options to come from user input 
*/