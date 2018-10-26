const { forwardTo } = require("prisma-binding");
const Query = {
  items: forwardTo("db")
};

module.exports = Query;

// async items(parent, args, ctx, info) {
//   const items = await ctx.db.query.items();
//   return items;
// }
