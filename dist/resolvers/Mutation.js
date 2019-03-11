"use strict";
exports.__esModule = true;
var nexus_1 = require("nexus");
var nexus_prisma_1 = require("nexus-prisma");
exports.Mutation = nexus_prisma_1.prismaObjectType({
    name: 'Mutation',
    definition: function (t) {
        /**
         * - use `t.prismaFields(['*'])` to expose all the underlying object type fields
         * - use `t.primaFields(['fieldName', ...])` to pick and/or customize specific fields
         * - use `t.prismaFields({ filter: ['fieldName', ...] })` to filter and/or customize specific fields
         */
        // An empty array removes all fields from the underlying object type
        t.prismaFields([]);
        t.field('deletePost', {
            type: 'Post',
            nullable: true,
            args: {
                id: nexus_1.idArg()
            },
            resolve: function (parent, args, ctx) {
                return ctx.prisma.deletePost({ id: args.id });
            }
        });
        t.field('signupUser', {
            type: 'User',
            args: {
                name: nexus_1.stringArg(),
                email: nexus_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var name = _a.name, email = _a.email;
                return ctx.prisma.createUser({ name: name, email: email });
            }
        });
        t.field('createDraft', {
            type: 'Post',
            args: {
                title: nexus_1.stringArg(),
                content: nexus_1.stringArg(),
                authorEmail: nexus_1.stringArg()
            },
            resolve: function (parent, _a, ctx) {
                var title = _a.title, content = _a.content, authorEmail = _a.authorEmail;
                return ctx.prisma.createPost({
                    title: title,
                    content: content,
                    author: { connect: { email: authorEmail } }
                });
            }
        });
        t.field('publish', {
            type: 'Post',
            args: {
                id: nexus_1.idArg()
            },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.updatePost({
                    where: { id: id },
                    data: { published: true }
                });
            }
        });
    }
});
//# sourceMappingURL=Mutation.js.map