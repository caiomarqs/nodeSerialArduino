const SerialPort = require('serialport')

const port = new SerialPort('COM3', {
    baudRate: 9600 
})

//Try Serial port connection
port.on('open', (err) => {
    if (err) {
        return console.error("Serial Connection -> DON'T WORK: \n" + err.message)
    }
    console.log("Serial Connection -> OK!")
})

//Reciving data form serial port
port.on('data', (data) =>{
    console.log('Data:', data.toString('utf8'))
})