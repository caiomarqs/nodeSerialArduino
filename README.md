# Serial Arduino App
This project is an example of data interaction between *Arduino* and *Node.js*. See this document in [Portuguese](./README-ptBR.md).

### Run Project
- Install all *Node.js* dependencies:
```
    npm install
```
- Run a test of application on *Node.js*:
```
    npm test
```


### Configure Serial Listener

**Before running the application, connect the Arduino and run the program `.ino` on the Arduino IDE.**

This is a quick start, for more information see [Serial Port](https://serialport.io/docs/guide-about) documentation.

- Configure _Serial/USB_ port for listening:
```js
    const config = {
        log: false,
        port: 'COM3',
        baudRate: 9600,
        serialLog: true
    }
```

- Init connection on _Serial/USB_ port:
```js
    const SerialArduinoApp = require('serial-arduino-app')

    const config = {
        log: false,
        port: 'COM3',
        baudRate: 9600,
        serialLog: true
    }

    const serial = new SerialArduinoApp(config)

```

-  Example of data recived from Arduino:
```js
    serial.reciveDataToSerial() //Start recive data from serialport

    serial.on('serial-data', (serialdata) => {
        console.log(serialdata)
    })
```

- Example of data sended to Arduino:
```js
    serial.sendDataToSerial() //Start send data to serialport

    const emitter = new EventEmitter() //Use to simulate the event
    emitter.on('event', () => {
        setInterval(() => {
            serial.emit('send-data', '100') //Emit the data to Serial Port
        }, 50)
    })
    emitter.emit('event') // Force the event
```

