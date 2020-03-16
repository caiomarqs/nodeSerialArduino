const SerialPort = require('serialport')
const Delimiter = require('@serialport/parser-delimiter')
const EventEmitter = require('events')

class SerialArduinoApp extends EventEmitter {
    constructor( config = { 
                            log: false, 
                            port: 'COM3', 
                            baudRate: 9600, 
                            ...options } ) {                     
        super();
        this.config = config;

        this.port = new SerialPort(this.config.port, {
            baudRate: this.config.baudRate
        })
    }

    start() {


        //open serial connection
       this.port.on('open', (err) => {
            if (err) {
                return console.error("Serial Connection -> DON'T WORK: \n" + err.message)
            }
            console.log("Serial Connection -> OK!")
        })
    }

    emmiter() {
        this.start()

        const parser = this.port.pipe(new Delimiter({ delimiter: '\n' }))
        const dataObj = { value: "" }

        if (this.config.log == true) {
            console.log("Logging data from Serial... \n")
        }
        else {
            console.log("No logs data from Serial... \n")
        }

        parser.on('data', (data) => {
            dataObj.value = data.toString('utf8')

            if (this.config.log == true) {
                console.log(dataObj.value)
            }

            this.emit('serial-data', dataObj.value.trim())
        })
    }
}

module.exports = SerialArduinoApp