let s = 'i am learniing javascript';


/*
console.log(s.length); // length  uznulini ulchedi.  length har doim 1dan boshlanadi
console.log(s.charAt(3));// string ichidan malumot qidirish index 0dan boshlab hisoblaydi
console.log(s.concat('  react js')) // malumot qushadi ohiridan
console.log(s.indexOf('am', s)) // uziga ikta qiymat oladi nimani qidirish va qayerdan
console.log(s.lastIndexOf())// ohiridan sanashni boshlaydi
console.log(s.search())
console.log(s.includes('am')) // boolean qiymat qaytaradi true false
*/
// String ichidan malumot qirqib olish
console.log(s.slice(1,3))// oz ichiga ikta qiymat oladi start index va end index
console.log(s.substring(1,4))//slice bilan birhil oz ichiga ikta qiymat oladi start index va end index
console.log(s.replace('javascript','react for js',)) // almashtrish  ("old", "new")
console.log(s.split())// value qilib chiqarib beradi va arrayga urab beradi
console.log(s.repeat())//  uzgaruvchini takrorlaydi
console.log(s.toUpperCase()) // kotta harf qiladi
console.log(s.toLowerCase())// kichik harf qiladi 
console.log(s.trim())// o'ng va chap tomonlardan bush joylarni olib tashlaydi
console.log(s.eval())// yordamida  string ichida matematik amal bajarsa buladi 
//padEnd ohirida nmalumot qushish. padStart boshidan
//startWith and endWith  matn boshi va ohirini topish boolean 