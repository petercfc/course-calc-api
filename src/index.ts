import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { prisma } from './generated/prisma-client'

const server = new GraphQLServer({
  schema,
  context: { prisma },
})

const opts = {
  endpoint: '/graphql',
}

server.start(opts, () =>
  console.log(`🚀 Server ready at http://localhost:4000`),
)
