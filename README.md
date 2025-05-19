# HYBE LATIN AMERICA - DATA HUB

A data management platform for HYBE Latin America.

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## Features

- View all data entries in a card-based layout
- Add new data entries through a modal form
- Data is persisted in Supabase
- Responsive design
- Error handling with toast notifications
- Date display for each entry
- Chronological sorting (newest/oldest first)
