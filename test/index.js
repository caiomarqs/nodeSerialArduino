'use strict'
const SerialArduinoApp = require('../lib/serial-arduino-app.js')

const config = { 
    log: false, 
    port: 'COM3', 
    baudRate: 9600 
}

const serial = new SerialArduinoApp(config)
serial.emmiter()

serial.on('serial-data', (serialdata) => {
    console.log(serialdata)
})