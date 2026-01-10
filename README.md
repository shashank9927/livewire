# LiveWire

A real-time chat room application built with Next.js 16, React 19, and Socket.IO.

## Features

- Create instant chat rooms with unique room codes
- Join existing rooms with a username
- Real-time messaging via WebSocket
- Dark/Light mode toggle
- Copy room code to clipboard
- Mobile responsive design

## Tech Stack

- **Frontend**: Next.js 16, React 19, TailwindCSS 4
- **Backend**: Socket.IO (standalone server)
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the Socket.IO server (port 8080)

```bash
npm run server
```

### 3. Start the Next.js development server (port 3000)

```bash
npm run dev
```

### 4. Open the app

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
livewire/
├── app/
│   ├── components/       # React components
│   │   ├── icons/        # Icon components
│   │   ├── AppBar.tsx    # Top navigation bar
│   │   ├── ChatRoom.tsx  # Chat room interface
│   │   └── JoinCreate.tsx # Join/Create room form
│   ├── context/          # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── server.js             # Socket.IO server
└── package.json
```

## Scripts

- `npm run dev` - Start Next.js development server
- `npm run server` - Start Socket.IO server
- `npm run build` - Build for production
- `npm run start` - Start production server
