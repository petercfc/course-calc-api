import { stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['*'])
  },
})
