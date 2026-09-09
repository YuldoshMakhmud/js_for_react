// functions  uchga bulinadi  "funksiya bu block code"
//1 Decleration function 2.Express function.  3. Arrow functions

//1 declaration function
// getBook(); buyerdaham ishledi declarationda  expressionda yuq
function getBook(){
    console.log("kitobni ol")
}
getBook();// buyerda declaration functionda funksiya nomini funksiydan oldin quysakham ishledi lekin expressinda ishlamedi


// expression function bu uzgaruvchiga instin qilingan yani parenti uzgaruvchi
// getBooks(); quya olmaysiz ishlamedi
let getBooks=function (){
console.log("kitob ol")
}
getBooks();

// declaration va expression farqi ularni var va letga uxshatsa buladi masalan uyerda declaration functionda funksiya nomini funksiydan oldin quysakham ishledi expressinda yuq

// 3. Arrow function es6 versiyada chiqqan deyarli expression bilan birhil lekin bir qator 
let getAllBooks = ()=>{
    console.log("barcha kitobni ol")
}
getAllBooks();
// arraw bilan expression farqi 
// arrow elon qilish oldin yozilsaham ishledi . expressionda yuq
//arrowda kod qatorini qisqartirsa buladi exressionda yuq


//return  return yordamida funksiayni uziga malumot biriktirib quyishimiz mumkin return bu teng degani

let giveBooks = (name)=>{
   
}
giveBooks();
//