# Portofolio Sederhana Tugas 3 PWL

Tugas 3 Pemrograman Web Lanjut mencakup:
- Membuat 3 komponen (Header, MainContent, Footer)
- Memnggunakan Library react-router-dom
- Menerapkan stateless dan statefull
- Melakukan konsep binding dengan menerapkan state management sederhana melalui useState dan useContext
- melakukan unit test dengan library testing React
- Penggunaan API dengan axios

## Cara Menggunakan Project ini
- Clone repo ini
- gunakan npm install atau yarn
- jalankan proyek dengan yarn dev atau npm dev
- jalankan testing dengan yarn test atau npm test

## Pembahasan
- Membuat 3 komponen (Header, MainContent, Footer)

  Saya membuat layout maincontent yang dapat berganti dengan bantuan Outlet yang ada pada react-router-dom yang dapat anda lihat dengn [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/components/layout/Index.jsx)

- Penggunaan react-router-dom

  saya menggunakan library tersebut untuk membuat Routes sebagai navigasi halaman [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/Routes.jsx)

- Menerapkan stateless dan statefull
  
  Stateless merupakan sebuah komponen yang tidak menyimpan state [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/page/Home.jsx)

  Statefull merupakan sebuah komponen yang menggunakan state [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/page/Welcome.jsx)
  
  
- Melakukan konsep binding dengan menerapkan state management sederhana melalui useState dan useContext

  Data binding merupakan cara untuk menghubungkan data antara komponen-komponen yang ada [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/page/Contacts.jsx) , dapat dilihat data binding terdapat di bagian function Contacts(), untuk penggunaan useState berada di function MessageForm(), sedangkan useContext saya gunakan pada MessageContext, yang hasilnya dapat dilihat pada gambar dibawah ini

  <img src="https://github.com/ryan-ern/ryanporto/blob/master/public/context.png" width="auto"/>

- melakukan unit test dengan library testing React

  saya melakukan testing menggunakan @testing-library/react pada halaman home saja [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/page/Home.test.jsx), yang hasilnya dapat dilihat pada gambar dibawah ini

  <img src="https://github.com/ryan-ern/ryanporto/blob/master/public/test.png" width="auto"/>

 - Penggunaan API dengan axios
   
   Saya menggunakan API pada newsapi yang hanya bekerja di lingkup localhost [klik disini](https://github.com/ryan-ern/ryanporto/blob/master/src/page/News.jsx)
  
