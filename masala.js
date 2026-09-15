// masala

// Masala: "Talaba" klassini yozing.
// - ism va baholar (massiv) orqali obyekt yaratiladi
// - o'rtacha bahoni hisoblaydigan metod bo'lsin
// - o'rtacha baho 4 dan katta yoki teng bo'lsa "o'tdi", aks holda "qoldi" deb chiqarsin (ternary bilan)

class Talaba {
  constructor(ism, baholar) {
    this.ism = ism;
    this.baholar = baholar;
  }

  ortachaBaho() {
    const yigindi = this.baholar.reduce((a, b) => a + b, 0);
    return yigindi / this.baholar.length;
  }

  natija() {
    const ortacha = this.ortachaBaho();
    return ortacha >= 4 ? "o'tdi" : "qoldi";
  }
}

const talaba1 = new Talaba("Ali", [5, 4, 3, 5]);
const talaba2 = new Talaba("Vali", [2, 3, 3, 4]);

console.log(`${talaba1.ism}: o'rtacha baho = ${talaba1.ortachaBaho()}, natija = ${talaba1.natija()}`);
console.log(`${talaba2.ism}: o'rtacha baho = ${talaba2.ortachaBaho()}, natija = ${talaba2.natija()}`);
