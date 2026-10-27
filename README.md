# MeetWise

MeetWise is an AI meeting assistant MVP built with Next.js, TypeScript, Tailwind CSS, Supabase, Stripe, and a managed live video service (LiveKit/Daily). This repository contains the project scaffold, mock/test data, and route stubs needed to start development in VS Code.

## Features included
- Dashboard with meeting list
- Upload flow page
- Live meeting page
- Meeting detail page with transcript, summary, action items
- Billing page
- Admin user management page
- API routes for meetings, billing, and exports
- `.env.example` placeholders for Supabase, Stripe, OpenAI, and LiveKit/Daily

## Tech stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Supabase (ready for integration)
- Stripe (mock checkout/portal flows)
- LiveKit/Daily scaffold
- OpenAI (ready for transcription and summarization logic)

## Quick start

1. Install dependencies:
   npm install
2. Copy the environment file:
   cp .env.example .env.local
3. Run the app:
   npm run dev
4. Visit:
   http://localhost:3000

## Notes
This scaffold intentionally keeps the implementation realistic but uses mock data wherever external services need real credentials. The API routes and UI are ready for integration with Supabase Auth, Stripe webhooks, OpenAI, and live meeting provider webhooks.
