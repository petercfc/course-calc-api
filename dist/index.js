"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("./schema");
var prisma_client_1 = require("./generated/prisma-client");
var server = new graphql_yoga_1.GraphQLServer({
    schema: schema_1.schema,
    context: { prisma: prisma_client_1.prisma }
});
var opts = {
    endpoint: '/graphql'
};
server.start(opts, function () {
    return console.log("\uD83D\uDE80 Server ready at http://localhost:4000");
});
//# sourceMappingURL=index.js.map