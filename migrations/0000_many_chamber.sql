CREATE TABLE "applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fullName" text NOT NULL,
	"email" text NOT NULL,
	"phoneNumber" text DEFAULT '' NOT NULL,
	"attendance" boolean NOT NULL,
	"otherGuests" text[] DEFAULT '{}' NOT NULL,
	"accommodation" text DEFAULT '' NOT NULL,
	"foodRestrictions" text DEFAULT '' NOT NULL,
	"comment" text DEFAULT '' NOT NULL,
	"submittedApplicationAt" timestamp DEFAULT now() NOT NULL,
	"isTestEntry" boolean DEFAULT false NOT NULL
);
