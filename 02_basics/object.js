const mySym = Symbol("key1")

const jsuser = {

    name: "jash patel",
    mySym : "mykey1",   
    "full name":"jash patel",
    [mySym]: "mykey1",
    age:23,
    city:"vadodara",
    email:"jash@google.com",
    isloggedindays:"false",
    lastlogindays:["monday","saturday"]

}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym])


jsuser.email = "jashpatel@gmail.com"
Object.freeze(Jsuser)
jsuser.email = "jashpatelemail.com"
console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello jash");
}
jsuser.greetingtwo = function(){
    console.log(`hello jash,${this["full name"]}`);



}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());




// ******************************************************************************


const newuser = new Object()
newuser.ID = "12334"
newuser.Name = "jash patel"
newuser.loggendIn = false

console.log(newuser);







