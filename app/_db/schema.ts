import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const applications = pgTable('applications', {
  id: uuid('id').defaultRandom().primaryKey(),
  fullName: text('fullName').notNull(),
  email: text('email').notNull(),
  phoneNumber: text('phoneNumber').default('').notNull(),
  attendance: boolean('attendance').notNull(),
  otherGuests: text('otherGuests').array().default([]).notNull(),
  accommodation: text('accommodation').default('').notNull(),
  foodRestrictions: text('foodRestrictions').default('').notNull(),
  comment: text('comment').default('').notNull(),
  submittedApplicationAt: timestamp('submittedApplicationAt').notNull().defaultNow(),
  isTestEntry: boolean('isTestEntry').default(false).notNull(),
});
