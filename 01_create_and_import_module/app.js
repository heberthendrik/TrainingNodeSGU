/*
NOTES:

- untuk load module dari file .js lain ataupun core module lainnya
bisa menggunakan methode require();
- biasakan untuk menggunakan const sebagai tipe varilable import,
karena untuk mencegah terjadinya varilable overiding
- 

*/
const varilable_logger = require('./logger.js');

varilable_logger.PublicLog('ini test cara pertama');