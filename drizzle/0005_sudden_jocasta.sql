DROP INDEX IF EXISTS "users_email_unique";--> statement-breakpoint
ALTER TABLE `cases` ALTER COLUMN "created_at" TO "created_at" text NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);