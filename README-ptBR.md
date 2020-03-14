# Node Serial Arduino
Esse projeto é um exemplo de interação de dados entre o *Arduino* e o *Node.js*.

### Rode o projeto
- Instele todas as dependecias do *Node.js*:
```
    npm install
```
- Rode a aplicação no *Node.js*:
```
    node index.js
```

### Configurando a aplicação
**Antes de rodar a aplicação, ligue o Arduino na porta *Serial/USB* e rode o programa `.ino` na Arduno IDE.**

Esse é um projeto é um projeto inicial, para mais informações veja a documentação da lib [Serial Port](https://serialport.io/docs/guide-about).

- Configurando a porta *Serial/USB* no `index.js`:
```
    const SerialPort = require('serialport')

    const port = new SerialPort('yourSerialPort', {
        baudRate: 9600 
    })
```

- Inciando a conexão da porta *Serial/USB*:
```
    port.on('open', (err) => {
        if (err) {
            return console.error("Serial Connection -> DON'T WORK: \n" + err.message)
        }
        console.log("Serial Connection -> OK!")
    })
```

-  Exemplo de dados recebidos do arduino:
```
    port.on('data', (data) =>{
        console.log('Data:', data.toString('utf8'))
    })
```

