 const myarr = [1,2,3,4,5,6,7]
 const myHear = ["doremon"]

const myarr2 = (2,3,4,5,6,1,5,6,7)
console.log(myarr[0]);





array method




 myarr.push(22)
 console.log(myarr);

 myarr.push(33)
 
 myarr.pop()
console.log(myarr);

myarr.unshift(45)
myarr.shift()
console.log(myarr);
console.log(myarr.includes(1212));
console.log(myarr.indexOf(1212));

const newarr = myarr.join()
console.log(myarr);
console.log(newarr);


console.log("A",myarr);
const myn1 = myarr.slice(1,3)

console.log(myn1);

console.log("B",myarr);

const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);



const marval_Hero = ["ironman","thor","hulk"]

const dc_Hero = ["superman","flash","batman"]

marval_Hero.push(dc_Hero)

console.log(marval_Hero);

const myNew_hero = marval_Hero.concat(dc_Hero)
console.log(myNew_hero);

const allnewhero = [...marval_Hero,...dc_Hero]
console.log(allnewhero);

const another_array = [1,2,3,[4,5,6,7,[8,9,1,[2,3,4,]]]]
const new_array = another_array.flat(4)

console.log(new_array);

console.log(Array.isArray("jash"));
console.log(Array.from("jash"));
console.log(Array.from({name:"jash"}));

let score1=("100")
let score2=("200")
let score3=("300")

console.log(Array.of(score1,score2,score3,));










