# Node Serial Arduino
Esse projeto é um exemplo de interação de dados entre o *Arduino* e o *Node.js*.

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
```
    const config = { 
        log: false, 
        port: 'yourSerialPort', 
        baudRate: 9600 
    }
```

- Inciando a conexão da porta *Serial/USB*:
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

-  Exemplo de dados recebidos do arduino:
```
    serialApp.emmiter()

    serialApp.on('serial-data', (serialdata) => {
        console.log(serialdata)
    })
```

