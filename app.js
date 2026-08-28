//Import das dependências para criar a API
const express   = require('express')
const cors      = require('cors')
const bodyParser      = require('body-parser')

//Para criar a comunicação entre a API e o equipamento Iot, é necessário instalar
// a dependencia mqtt => npm install mqtt --save
const mqtt = require('mqtt')


//Criando um cliente para se comunicar para o servidor MQTT
// através do protocolo mqtt
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com')


//Criando um objeto para manipular o express
const app = express()

const bodyParserJSON = bodyParser.json();
//Conjunto de permissões a serem aplicadas no CORS da API
const corOptions = {
    origin: ['*'], //A origin da requisição, podendo ser um ip ou o '*' deixa liberado para qualquer máquina fazer a requisição da API
    methods: 'GET, POST', //São os verbos que serão liberados na API (GET, POST, PUT E DELETE)
    allowedHeaders: ['Content-type', 'Autorization'], //São permissões de cabeçalho do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corOptions))

app.post('/v1/iot/led', function(request, response){

    let dadosBody = request.body

    if(dadosBody.comando = 'ligar')
        mqttClient.publish('senaijandira/sala/manha/9', 'ligar')
    else if(dadosBody.comando = 'desligar')
        mqttClient.publish('senaijandira/sala/manha/9', 'desligar')
    

    mqttClient.publish('senaijandira/sala/manha/9', 'ligar')


    response.status(200);
    response.json({'message': 'Comando enviando com sucesso'})
})

app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições')
})
