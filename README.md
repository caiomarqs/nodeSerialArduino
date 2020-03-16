# Node Serial Arduino
This project is an example of data interaction between *Arduino* and *Node.js*.

### Run Project
- Install all *Node.js* dependencies:
```
    npm install
```
- Run de a test of application on *Node.js*:
```
    npm test
```


### Configure Serial Listener

**Before running the application, connect the Arduino and run the program `.ino` on the Arduino IDE.**

This is a quick start, for more information see [Serial Port](https://serialport.io/docs/guide-about) documentation.

- Configure _Serial/USB_ port for listening:
```
    const config = { 
        log: false, 
        port: 'yourSerialPort', 
        baudRate: 9600 
    }
```

- Init connection on _Serial/USB_ port:
```
    const SerialArduinoApp = require('serial-arduino-app')

    const config = { 
        log: false, 
        port: 'COM3', 
        baudRate: 9600 
    }

    const serialApp = new SerialArduinoApp(config)
    serialApp.start()

```

-  Example of data recived from Arduino:
```
    serialApp.emmiter()

    serialApp.on('serial-data', (serialdata) => {
        console.log(serialdata)
    })
```

