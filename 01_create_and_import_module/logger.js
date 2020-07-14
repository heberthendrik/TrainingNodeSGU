/*
NOTES

- Semua varilable ataupun function yang di buat di dalam 1 file js 
ataupun 1 module, bersifat private, dan hanya bisa diakses dalam
ruang lingkup file itu saja
- Supaya function atau varilable bisa diakses dari luar, maka perlu 
dibuat public. Caranya adalah dengan menggunakan method module.exports
Ex: module.exports.NamaVarilablePublic = NamaVarilableLocal

*/

var url = "http://sguloggingservice.com/log";

function log(message){
    // Send an HTTP request
    console.log(message);
}

module.exports.PublicLog = log;