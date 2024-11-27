Next, I will discuss my approach to each of the required points in the test.

## Turso + Drizzle ORM

I chose to set up my own database to make data consumption more realistic. Using seeds, I populated the database with 1000 entries to meet the test requirements.

The database-related files can be found in `/src/db`.

## Tailwind + tailwind-merge + clsx + cva

The project styles use Tailwind. I also use tailwind-merge along with clsx to create more complex class combinations, organize classes, etc...

Lastly, I used cva in some components to create variants of them.

## Parallel routes

The dashboard uses the Parallel Routes rendering strategy, which consists of dividing a page into subsets of pages that function as slots. This strategy allows for independent and non-blocking loading for each slot and makes it easy to implement complex architectures.

## Recharts + shadcn

For the charts, I had to use an alpha version of Recharts and configure a React version override to avoid conflicts with peer dependencies. This is a temporary solution until Recharts has official support for React 19.

I also used shadcn styles on top of Recharts.

## Jest + testing-library

The reusable components have unit tests done with Jest + Testing Library. Asynchronous components, being something completely new, are not yet supported by Testing Library.

## Server First

The entire project prioritizes server-side rendering. Client-exclusive components have been used at the deepest possible levels. All data fetching is server-only.