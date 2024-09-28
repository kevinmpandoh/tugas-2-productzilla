// Tugas 1 
console.log("===== Tugas 1 =====");

// String
let namaLengkap: string = "Kevin Mclaren Pandoh";
let alamat: string = "Manado, Sulawesi Utara";
let email: string = "kevinmpandoh@gmail.com";
let linkedin: string = "https://www.linkedin.com/in/kevinmpandoh/";
let telepon: string = "081234567890";
let website: string = "https://kevinmpandoh.github.io";
let universitas: string = "Universitas Negeri Manado";
let fakultas: string = "Teknik";
let jurusan: string = "Teknik Informatika";
let angkatan: string = "2021";
let pekerjaan: string = "Software Engineer";
let perusahaan: string = "PT. ABC Indonesia";
let hobi: string = "Main Game";

// Number
let umur: number = 22;
let tinggi: number = 162;
let berat: number = 60;
let ipk: number = 3.5;
let semester: number = 7;
let sks: number = 127;


// Boolean
let isMarried: boolean = false;
let isGraduated: boolean = false;
let isWorking: boolean = true;
let isStudying: boolean = true;
let isSingle: boolean = false;
let isDeveloper: boolean = true;

// Null
let nilaiNull: null = null;

// Undefined
let nilaiUndefined: undefined = undefined;

// Symbol
let uniqueID: symbol = Symbol("id");

// BigInt
let bigInt: bigint = 100n;

console.log("Nama Lengkap:", namaLengkap);
console.log("Umur:", umur);
console.log("Sudah lulus:", isGraduated ? "Sudah" : "Belum");

console.log("\n=====Fungsi Matematika =====");

// Fungsi untuk penjumlahan
function tambah(a: number, b: number): number {
    return a + b;
}

// Fungsi untuk pengurangan
function kurang(a: number, b: number): number {
    return a - b;
}

// Fungsi untuk perkalian
function kali(a: number, b: number): number {
    return a * b;
}

// Fungsi untuk pembagian
function bagi(a: number, b: number): number {
    if (b === 0) {
        console.log("Error: Pembagi tidak boleh 0");
    }
    return a / b;
}

// Contoh penggunaan fungsi
console.log("Penjumlahan:", tambah(10, 5));    // Output: 15
console.log("Pengurangan:", kurang(10, 5));    // Output: 5
console.log("Perkalian:", kali(10, 5));        // Output: 50
console.log("Pembagian:", bagi(10, 5));        // Output: 2


// Tugas 2
console.log("\n===== Tugas 2 =====");

// Variabel untuk menyimpan informasi pahlawan
let nameHero: string = "Arion";
let umurHero: number = 30;
let siapBertarung: boolean = true;

// Menampilkan informasi pahlawan
console.log(`Nama: ${nameHero}`);
console.log(`Umur: ${umurHero}`);
console.log(`Siap bertarung: ${siapBertarung ? 'Ya' : 'Tidak'}`);

// Variabel untuk sumber data kerajaan
let emasKerajaan: number = 5000;
let persediaanMakanan: number = 120;
let jumlahPrajurit: number = 200;

// Menampilkan sumber daya kerajaan
console.log(`Emas Kerajaan: ${emasKerajaan} keping`);
console.log(`Persediaan Makanan: ${persediaanMakanan} unit`);
console.log(`Prajurit: ${jumlahPrajurit} orang`);


// Variabel hasil petualangan pahlawan
let emasTambahan: number = 1500;
let pengalamanBertarung: number = 75;

// Operasi matematika untuk menambah emas kerajaan dari hasil petualangan
emasKerajaan += emasTambahan;

// Menampilkan hasil petualangan pahlawan
console.log(`Emas setelah petualangan: ${emasKerajaan} keping`);
console.log(`Pengalaman bertarung Arion: ${pengalamanBertarung} XP`);

let kesehatanPrajurit: number = 100;

// Fungsi untuk mengurangi kesehatan prajurit
function kurangKesehatan(jumlahPrajurit: number, poinKesehatanHilang: number): void {
  let totalKehilanganKesehatan = jumlahPrajurit * poinKesehatanHilang;
  kesehatanPrajurit -= totalKehilanganKesehatan;

  // Pastikan poin kesehatan tidak turun di bawah 0
  if (kesehatanPrajurit < 0) {
    kesehatanPrajurit = 0;
  }

  console.log(`Kesehatan prajurit setelah serangan: ${kesehatanPrajurit} poin`);
}

// Contoh penggunaan fungsi
kurangKesehatan(2, 10);   // Output: 80

// Fungsi untuk mencetak rangkuman hasil misi Arion
function rangkumanMisi(namaPahlawan: string, emasDikumpulkan: number, pengalamanDidapat: number): void {
    console.log(`Nama Pahlawan: ${namaPahlawan}`);
    console.log(`Emas yang dikumpulkan: ${emasDikumpulkan} keping`);
    console.log(`Poin pengalaman yang didapat: ${pengalamanDidapat} XP`);
}
  
// Contoh penggunaan fungsi dengan data Arion
rangkumanMisi(nameHero, emasTambahan, pengalamanBertarung);