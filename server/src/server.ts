import fastify from 'fastify'

const app = fastify()

// - `GET /`: Detalhes da API, se conexão leitura e escritura com a base de dados está OK, horário da última vez que o CRON foi executado, tempo online e uso de memória.
// - `PUT /products/:code`: Será responsável por receber atualizações do Projeto Web
// - `DELETE /products/:code`: Mudar o status do produto para `trash`
// - `GET /products/:code`: Obter a informação somente de um produto da base de dados
// - `GET /products`: Listar todos os produtos da base de dados, adicionar sistema de paginação para não sobrecarregar o `REQUEST`.

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server is running 🐱‍💻')
})