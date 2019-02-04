function b() {
    var myVar; // it's in the function 'b' execution context
    console.log(myVar);//happens 3rd log = undefined
}

function a(){
    var myVar = 2; //  it's in the function 'a' execution context
    console.log(myVar); //happens 2nd log = 2
    b();
}

var myVar = 1;// Global execution context 
console.log(myVar);//happens 1st log = 1
a();
console.log(myVar)// happens 4th log = 1

//all myVar are not related due to execution context. 