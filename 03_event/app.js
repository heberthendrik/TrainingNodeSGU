/*

EVENT

Event -> signal yang mengindikasikan sesuatu 
telah terjadi di aplikasi kalian

Mayoritas kita hanya pakai 2 method, yaitu on dan emit
emit -> digunakan untuk mentrigger signal atau event
on -> function yang dipanggil kalau event dipanggil

function emitter.on butuh 2 parameter
- parameter 1 = nama dari event yang mau dipanggil
- parameter 2 = callback function
- template
emitter.on('namaEvent', function(){
    // script yang kalian mau jalankan
});

- sebaiknya passing data event arguement menggunakan
json object

*/

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg){
    // varilable arg, yang bisa kalian pakai
    // isi di dalam arg => json object dengan ID 1, dan url bla bla bla
    console.log('Listener called', arg);
});


const Logger = require('./logger');
const logger = new Logger();

Logger('ini test message');