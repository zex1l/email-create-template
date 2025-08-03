import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const SaveTemplate = mutation({
  args: {
    templateId: v.string(),
    design: v.any(),
    email: v.string(),
    description: v.string(),
  },
  handler: async (ctx, { templateId, design, email, description }) => {
    return await ctx.db.insert('emailTemplate', {
      templateId,
      design,
      email,
      description,
    });
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

export const updateEmailTemplate = mutation({
  args: {
    templateId: v.string(),
    design: v.any(),
  },
  handler: async (ctx, { templateId, design }) => {
    const doc = await ctx.db
      .query('emailTemplate')
      .filter((q) => q.eq(q.field('templateId'), templateId))
      .first();

    if (!doc) return;

    const docId = doc._id;

    return await ctx.db.patch(docId, {
      design,
    });
  },
});

export const getEmailTemplates = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, { email }) => {
    return await ctx.db
      .query('emailTemplate')
      .filter((q) => q.eq(q.field('email'), email))
      .collect();
  },
});
