/*

NOTE
1. package.json file, wajib ada, dalam pembuatan setiap node application kalian

2. cara untuk generate package.json file, bisa dengan mengetikan --> npm init

3. npm init, akan membawa kalian ke sebuah wizard, yang pada dasarnya
menanyakan sejumlah informasi dasar tentang nope app yang kalian buat

4. cara mudah supaya tidak perlu mengisi wizard satu per satu,
dan secara paksa menjawab seluruh pertanyaan wizard dengan enter, bisa dengan eksekusi
npm init --yes

5. setiap kali kalian npm init, maka package.json file yang sudah ada, 
akan di replace dan tergantikan dengan yang baru
(Jadi, hati-hati dengan penggunaan command ini)

6. apabila package.json tidak sengaja terhapus, ga masalah, karena 
kalian tinggal generate ulang, dengan menggunakan npm init, atau npm init --yes

7. Tapi HATI-HATI, jangan sampai package.json terhapus secara tidak sengaja
SETELAH project berjalan ataupun SETELAH project selesai, tanpa BACKUP.
Karena package.json akan menyimpan dependency dari semua module yang kalian gunakan di 
node app kalian. Jadi sebaiknya, file tersebut sebisa mungkin di backup.

*/