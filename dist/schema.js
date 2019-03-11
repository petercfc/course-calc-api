"use strict";
exports.__esModule = true;
var nexus_prisma_1 = require("nexus-prisma");
var path = require("path");
var nexus_prisma_2 = require("./generated/nexus-prisma");
var prisma_client_1 = require("./generated/prisma-client");
var allTypes = require("./resolvers");
/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
exports.schema = nexus_prisma_1.makePrismaSchema({
    types: allTypes,
    prisma: {
        datamodelInfo: nexus_prisma_2["default"],
        client: prisma_client_1.prisma
    },
    outputs: {
        schema: path.join(__dirname, './generated/schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus.ts')
    },
    nonNullDefaults: {
        input: true,
        output: true
    }
});
//# sourceMappingURL=schema.js.map