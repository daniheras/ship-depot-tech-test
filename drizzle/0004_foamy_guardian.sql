ALTER TABLE `cases` RENAME COLUMN "close_date" TO "closed_at";--> statement-breakpoint
DROP TABLE `ships`;--> statement-breakpoint
DROP INDEX IF EXISTS "users_email_unique";--> statement-breakpoint
ALTER TABLE `cases` ALTER COLUMN "created_at" TO "created_at" text NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
ALTER TABLE `cases` ALTER COLUMN "status" TO "status" text NOT NULL;--> statement-breakpoint
ALTER TABLE `cases` ADD `ship_model` text NOT NULL;--> statement-breakpoint
ALTER TABLE `cases` ADD `ship_image` text NOT NULL;--> statement-breakpoint
ALTER TABLE `cases` DROP COLUMN `ship_id`;--> statement-breakpoint
ALTER TABLE `cases` DROP COLUMN `open_date`;