// a project here to create a working todo list!
let todoList = [];
// our todo list is an empty array

// random function
function random(max) {
    let randDec = Math.random() * (max + 1);
    let randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}

// grab our button from our document
let addButton = document.querySelector("#addB");
let removeButton = document.querySelector("#removeB")

// grab our list element
let list = document.querySelector("#ourList");

// grab our input element
let inputText = document.querySelector("#input");
let numberInputText = document.querySelector("#numInput");

// both add and remove work
addButton.onclick = function(event) {
// prevent refreshing
event.preventDefault();
    // random colors 
    let r = random(255);
    let g = random(255);
    let b = random(255);

    const string = inputText.value;
    // create our additional tag for the additional row
    let additionalRow = document.createElement('li');
    // add the content to that row
    // below we add the text for our todo list
    additionalRow.append(string);

    // style each row for todoList
    additionalRow.style.fontSize = "18px";
    additionalRow.style.borderBottom = "grey solid 2px";
    additionalRow.style.borderTop = "grey solid 2px";
    additionalRow.style.marginBottom = "5px";
    additionalRow.style.color = "rgb("+r+","+g+","+b+")";
    // append our additional row in the list into the DOM, we add the element in the parent node 'ol' at the end
    list.append(additionalRow);
    todoList.push(string);

    inputText.value = "";

}
// if removeButton is clicked remove an item
removeButton.onclick = function(event) {
    event.preventDefault();

    // grab item index from number input
    const itemNum = numberInputText.value;
    
    if (itemNum <= todoList.length + 1) {
        
            todoList.splice(itemNum-1,1);
            // remove child function here uses the list property childnodes
            // remove the last child
            list.removeChild(list.childNodes[itemNum]);

    }

    numberInputText.value = "";
}
