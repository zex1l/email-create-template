import { authTables } from '@convex-dev/auth/server';
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.string(),
    email: v.string(),
  }),
  emailTemplate: defineTable({
    templateId: v.string(),
    design: v.any(),
    email: v.string(),
  }),
});
