import fastify from 'fastify'

export const app = fastify()

app.get('/', async function (request, reply) {
  return { hello: 'world' }
})
