// OOP javascriptda 
// classlar va obyektlar bilan ishlashni osonlashtiradi. OOP (Object-Oriented Programming) dasturlash paradigmasi bo'lib, u ma'lumotlarni va ularni qayta ishlash usullarini birlashtirishga imkon beradi. JavaScriptda OOPni amalga oshirish uchun classlar va obyektlar ishlatiladi.      
    class Inson {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }

  salomlash() {
    console.log(`Salom, men ${this.ism}, ${this.yosh} yoshdaman`);
  }
}

const odam1 = new Inson("Ali", 25);
odam1.salomlash(); // Salom, men Ali, 25 yoshdaman
 const odam2 = new Inson("Vali", 30);
odam2.salomlash(); // Salom, men Vali, 30 yoshdaman

// inheritance (meros olish) - bu bir classning boshqa classdan xususiyatlari va metodlarini meros qilib olish imkoniyatidir. Bu OOPning asosiy tushunchalaridan biridir. JavaScriptda inheritanceni amalga oshirish uchun extends kalit so'zi ishlatiladi.
class Hayvon {
  constructor(nom, yosh) {
    this.nom = nom;
    this.yosh = yosh;
  }

  ovozChiq() {
    console.log(`${this.nom} ovoz chiqarmoqda`);
  }
}

class It extends Hayvon {
  constructor(nom, yosh, tur) {
    super(nom, yosh);
    this.tur = tur;
  }

  ovchi() {
    console.log(`${this.nom} ${this.tur} turidagi it ovchi`);
  }
}

const it1 = new It("Rex", 5, "ovchi");
it1.ovchi(); // Rex ovchi turidagi it ovchi
it1.ovozChiq(); // Rex ovoz chiqarmoqda 

class Ishchi extends Inson {
  constructor(ism, yosh, kasbi) {
    super(ism, yosh); // ota klassning constructorini chaqiradi
    this.kasbi = kasbi;
  }

  salomlash() {
    super.salomlash(); // ota klassning metodini chaqirish
    console.log(`Men ${this.kasbi} bo'lib ishlayman`);
  }
}

const ishchi1 = new Ishchi("Vali", 30, "dasturchi");
ishchi1.salomlash();

// encapsulation (inkapsulyatsiya) - bu classning xususiyatlarini va metodlarini tashqi koddan yashirish imkoniyatidir. Bu OOPning asosiy tushunchalaridan biridir. JavaScriptda encapsulationni amalga oshirish uchun private xususiyatlar va metodlar ishlatiladi.
class BankHisob {
  #balans; // private xususiyat

  constructor(balans) {
    this.#balans = balans;
  }

  depozit(miqdor) {
    this.#balans += miqdor;
    console.log(`Depozit qilindi: ${miqdor}. Yangi balans: ${this.#balans}`);
  }

  yechibOlish(miqdor) {
    if (miqdor <= this.#balans) {
      this.#balans -= miqdor;
      console.log(`Yechib olindi: ${miqdor}. Yangi balans: ${this.#balans}`);
    } else {
      console.log("Balans yetarli emas");
    }
  }

  getBalans() {
    return this.#balans;
  }
}

const hisob1 = new BankHisob(1000);
hisob1.depozit(500); // Depozit qilindi: 500. Yangi balans: 1500
hisob1.yechibOlish(200); // Yechib olindi: 200. Yangi balans: 1300
console.log(`Joriy balans: ${hisob1.getBalans()}`); // Joriy balans: 1300       


//getter va setterlar - bu classning xususiyatlarini olish va o'zgartirish uchun ishlatiladigan metodlardir. Getterlar xususiyatlarni olish uchun ishlatiladi, setterlar esa xususiyatlarni o'zgartirish uchun ishlatiladi.
class Talaba {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }

  get ism() {
    return this._ism;
  }

  set ism(qiymat) {
    if (qiymat.length > 0) {
      this._ism = qiymat;
    } else {
      console.log("Ism bo'sh bo'lishi mumkin emas");
    }
  }

  get yosh() {
    return this._yosh;
  }

  set yosh(qiymat) {
    if (qiymat > 0) {
      this._yosh = qiymat;
    } else {
      console.log("Yosh manfiy bo'lishi mumkin emas");
    }
  }
}

const talaba1 = new Talaba("Ali", 20);
console.log(talaba1.ism); // Ali
talaba1.ism = "Vali"; // ism o'zgartirildi
console.log(talaba1.ism); // Vali
talaba1.yosh = 25; // yosh o'zgartirildi
console.log(talaba1.yosh); // 25
talaba1.ism = ""; // Ism bo'sh bo'lishi mumkin emas
talaba1.yosh = -5; // Yosh manfiy bo'lishi mumkin emas  

// static metodlar - bu classga tegishli bo'lgan metodlardir. Static metodlar classning obyektlariga emas, balki classning o'ziga tegishli bo'ladi. Static metodlar class nomi orqali chaqiriladi.
class Matematika {
  static kvadrat(x) {
    return x * x;
  }

  static kub(x) {
    return x * x * x;
  }
}

console.log(Matematika.kvadrat(5)); // 25
console.log(Matematika.kub(3)); // 27       


// polymorphism (polimorfizm) - bu bir xil nomdagi metodlarning turli classlarda turli xil ishlash imkoniyatidir. Bu OOPning asosiy tushunchalaridan biridir. JavaScriptda polymorphismni amalga oshirish uchun metod overriding ishlatiladi.
class Hayvon {
  ovozChiq() {
    console.log("Hayvon ovoz chiqarmoqda");
  }
}

class Mushuk extends Hayvon {
  ovozChiq() {
    console.log("Mushuk miyovlamoqda");
  }
}

class It extends Hayvon {
  ovozChiq() {
    console.log("It havlamoqda");
  }
}

const hayvon1 = new Hayvon();
hayvon1.ovozChiq(); // Hayvon ovoz chiqarmoqda

const mushuk1 = new Mushuk();
mushuk1.ovozChiq(); // Mushuk miyovlamoqda

const it1 = new It();
it1.ovozChiq(); // It havlamoqda    

// muhim prototiplar - bu classning obyektlariga tegishli bo'lgan xususiyatlar va metodlardir. Prototiplar classning obyektlariga meros qilib beriladi. JavaScriptda prototiplar orqali obyektlarga yangi xususiyatlar va metodlar qo'shish mumkin.
class Avtomobil {
  constructor(nom, yil) {
    this.nom = nom;
    this.yil = yil;
  }
}

Avtomobil.prototype.tezlik = function() {
  console.log(`${this.nom} tezlikda harakat qilmoqda`);
};          