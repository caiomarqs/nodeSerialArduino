# Node Serial Arduino
This project is an example of data interaction between *Arduino* and *Node.js*.

### Run Project
- Install all *Node.js* dependencies:
```
    npm install
```
- Run de application on *Node.js*:
```
    node index.js
```


### Configure Serial Listener

**Before running the application, connect the Arduino and run the program `.ino` on the Arduino IDE.**

This is a quick start, for more information see [Serial Port](https://serialport.io/docs/guide-about) documentation.

- Configure _Serial/USB_ port for listening in `index.js`:
```
    const SerialPort = require('serialport')

    const port = new SerialPort('yourSerialPort', {
        baudRate: 9600 
    })
```

- Init connection on _Serial/USB_ port:
```
    port.on('open', (err) => {
        if (err) {
            return console.error("Serial Connection -> DON'T WORK: \n" + err.message)
        }
        console.log("Serial Connection -> OK!")
    })
```

-  Example of data recived from Arduino:
```
    port.on('data', (data) =>{
        console.log('Data:', data.toString('utf8'))
    })
```

