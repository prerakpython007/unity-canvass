import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    
    if (!identity) {
      throw new Error("Unauthorized");
    }

    // Get the author's name from the identity
    const authorName = identity.name ?? identity.email ?? "Anonymous User";

    return await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: authorName,
      imageUrl: args.imageUrl,
    });
  },
});