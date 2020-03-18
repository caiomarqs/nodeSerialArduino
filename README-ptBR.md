# Serial Arduino App
Esse projeto é um exemplo de interação de dados entre o *Arduino* e o *Node.js*.
Veja a documentação em [Inglês](./README.md).

### Rode o projeto
- Instele todas as dependecias do *Node.js*:
```
    npm install
```
- Rode um teste da aplicação no *Node.js*:
```
    npm test
```

### Configurando a aplicação
**Antes de rodar a aplicação, ligue o Arduino na porta *Serial/USB* e rode o programa `.ino` na Arduno IDE.**

Esse é um projeto é um projeto inicial, para mais informações veja a documentação da lib [Serial Port](https://serialport.io/docs/guide-about).

- Configurando a porta *Serial/USB*:
```js
    const config = {
        log: false,
        port: 'COM3',
        baudRate: 9600,
        serialLog: true
    }
```

- Inciando a conexão da porta *Serial/USB*:
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

-  Exemplo de dados recebidos do arduino:
```js
    serial.reciveDataToSerial() //Start recive data from serialport

    serial.on('serial-data', (serialdata) => {
        console.log(serialdata)
    })
```

- Exemplo de dados enviados para o Arduino:
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

