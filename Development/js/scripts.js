//first
let web= ['menawar','nancy','moudhi','hussain','rahaf']



function logger(web) {
for(let i = 0; i < web.length; i++ ) {
 console.log(web[i]);
}
}

logger(web);

//second
let temps1 = [20 , 30 , 50 ,60]
let value = 40
temps2 = [];

function hottestdays(array, TH, empty_array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i]> TH) {
            empty_array.push(array[i]);
        }
    }
    return temps2;
}
console.log( hottestdays(temps1,value ,temps2));

//ثيرد
let books = [
    {
        name: "book1",
        ID:1,
    },

    {
        name: "book2",
        ID:2,
    },
    {
        name: "book3",
        ID:3,
    },
    {
        name: "book4",
        ID:4,
    },
];

// let bookId
let bookId = 5;

function getBookById(bookId , books) {
    for (let i = 0; i< books.length; i++){
        if (books[i].ID == bookId) {
            return books[i];
        }
    }
}
console.log(getBookById(bookId, books));
//فورث

let userinput = "";
let output = []

while (userinput !== "انتهيت"){
userinput = prompt("السلعه");
let price = prompt("السعر");
let quantity = prompt("الكميه");
let object = {
name: userinput,
price: price,
quantity: quantity,
};

 output.push(object);
 userinput = prompt("السلعة");
}

 for (let i = 0; i < output.length; i++) {
    console.log(output[i].quantity + 
        " "
        + output[i].name + 
        " " 
        + output[i].quantity * output[i].price);
     totalprice =+ output[i].quantity * output[i].price

}

console.log(totalprice);
