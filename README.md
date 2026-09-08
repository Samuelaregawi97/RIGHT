# RIGHT — Global Worker & Employer Marketplace

A production-oriented foundation for a global freelance marketplace named RIGHT.

Brand:
- Name: RIGHT
- Colors: black and white
- Logo: black check mark (✓)

## Architecture
- Next.js + TypeScript frontend
- Next.js Route Handlers for the initial API
- Prisma + PostgreSQL
- Secure session cookie authentication
- Configurable platform commission
- Worker/employer profiles
- Jobs, applications, contracts
- Transaction ledger
- Payment-provider abstraction (cards, crypto, bank/local payout providers)
- Admin configuration

## Important payment security rule
Never store raw Visa/Mastercard PAN, CVV, PIN, or private crypto keys in this application.
Use certified payment providers/tokenization and provider webhooks. Store only provider/customer/payment IDs and the minimum metadata required for reconciliation.

## Run
1. Copy `.env.example` to `.env`.
2. Set DATABASE_URL and AUTH_SECRET.
3. Install dependencies: `npm install`
4. Create DB: `npx prisma migrate dev --name init`
5. Start: `npm run dev`

This repository intentionally keeps payment credentials/provider secrets out of source code. Payment providers can be added behind `src/lib/payments/provider.ts`.
