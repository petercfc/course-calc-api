"use strict";
exports.__esModule = true;
var nexus_1 = require("nexus");
var nexus_prisma_1 = require("nexus-prisma");
exports.Query = nexus_prisma_1.prismaObjectType({
    name: 'Query',
    definition: function (t) {
        /**
         * - use `t.prismaFields(['*'])` to expose all the underlying object type fields
         * - use `t.primaFields(['fieldName', ...])` to pick and/or customize specific fields
         * - use `t.prismaFields({ filter: ['fieldName', ...] })` to filter and/or customize specific fields
         */
        // An empty array removes all fields from the underlying object type
        t.prismaFields([]);
        t.list.field('feed', {
            type: 'Post',
            resolve: function (parent, args, ctx) {
                return ctx.prisma.posts({
                    where: { published: true }
                });
            }
        });
        t.list.field('filterPosts', {
            type: 'Post',
            args: {
                searchString: nexus_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var searchString = _a.searchString;
                return ctx.prisma.posts({
                    where: {
                        OR: [
                            { title_contains: searchString },
                            { content_contains: searchString },
                        ]
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=Query.js.map