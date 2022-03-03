// METHOD 1 - FOR LOOP

for(let triangle = "#"; triangle.length <= 7; triangle += "#")

console.log(triangle);

for(let triangle = "#"; triangle.length <= 1; triangle += "#"

.log(triangle);

/*

for(starting value; condition to stop ooping; adjustment per iteration)

.length -> count how many characters there are in that string

  Reason we use .length
"string" <- Number (WE DON'T WANT THIS - BAD)
Number <- Number (WE WANT THIS - GOOD)

triangle += "#" is the same as triangle = triangle + "#"


*/ 





let tree = "#";

for (let index = 0; index < 7; index++) {
    console.log(tree);
    tree += "#";
}
console.log(tree)



for (let tree = ""; tree.length < 8; tree += "#" {
    console.log(tree);
    tree = tree + "#";
}






for (let i = 0; i < 10; i++)
{
    if (i % 2 === 0) { 
        continue;
    }
    console.log (i);
}



let fs = require("require")
let files = fs.readdirSync("./");
files.forEach(
    file => console.log(file)
);





let name = "Vega Lowry";
for (let index = 0; index < name.length; index++) {
    console.log(name);
}

let array = []


let array = []