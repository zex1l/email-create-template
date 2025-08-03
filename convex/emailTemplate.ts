import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const SaveTemplate = mutation({
  args: {
    templateId: v.string(),
    design: v.any(),
    email: v.string(),
  },
  handler: async (ctx, { templateId, design, email }) => {
    return await ctx.db.insert('emailTemplate', { templateId, design, email });
  },
});

export const getEmailTemplateById = query({
  args: {
    templateId: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { templateId, email }) => {
    try {


      const template = await ctx.db
        .query('emailTemplate')
        .filter((q) =>
          q.and(
            q.eq(q.field('templateId'), templateId),
            q.eq(q.field('email'), email)
          )
        )
        .first();

      return template;
    } catch (e) {
      console.log(e);
    }
  },
});
