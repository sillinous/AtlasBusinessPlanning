# ATLAS

## Adaptive Technology for Launch, Analysis & Strategy

A comprehensive AI-powered venture building platform for researching, planning, building, and launching new businesses.

![ATLAS Dashboard](docs/images/dashboard-preview.png)

---

## Overview

ATLAS serves as the central nervous system for entrepreneurs building new ventures. It combines document management, collaborative workflows, AI-assisted analysis, and automated intelligence gathering into a unified system that accelerates the journey from idea to operating business.

### Key Features

- **Command Center** — Strategic dashboard with AI-powered recommendations
- **Research Hub** — Automated market research and competitor analysis
- **Financial Lab** — Financial modeling with scenario analysis
- **Operations Forge** — SOPs, equipment planning, and process documentation
- **Market Engine** — Marketing strategy and content calendar management
- **Document Vault** — Version-controlled document storage and collaboration
- **War Room** — Team collaboration and stakeholder management
- **Mission Timeline** — Project milestones and launch tracking

### AI Strategist

Built-in AI assistant that powers:
- Automated research and intelligence gathering
- Document generation (business plans, pitch decks)
- Financial validation and benchmarking
- Priority recommendations based on project state
- Progress assessment and blocker identification

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL 14+ (for backend)
- Redis (for caching/sessions)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/atlas.git
cd atlas

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/atlas

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# AI (Claude API)
ANTHROPIC_API_KEY=your-api-key

# Storage (S3-compatible)
S3_BUCKET=atlas-documents
S3_REGION=us-east-1
S3_ACCESS_KEY=your-access-key
S3_SECRET_KEY=your-secret-key

# External APIs (optional)
GOOGLE_MAPS_API_KEY=your-key
YELP_API_KEY=your-key
```

---

## Project Structure

```
atlas/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base components (buttons, inputs, etc.)
│   │   ├── layout/      # Layout components (sidebar, header)
│   │   └── shared/      # Shared complex components
│   ├── modules/         # Feature modules
│   │   ├── command/     # Command Center
│   │   ├── research/    # Research Hub
│   │   ├── financial/   # Financial Lab
│   │   ├── operations/  # Operations Forge
│   │   ├── marketing/   # Market Engine
│   │   ├── documents/   # Document Vault
│   │   ├── collaboration/ # War Room
│   │   └── timeline/    # Mission Timeline
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── api/             # API routes and services
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── docs/                # Documentation
├── scripts/             # Build and utility scripts
├── prisma/              # Database schema and migrations
└── tests/               # Test files
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + TypeScript |
| Framework | Next.js 14 |
| Styling | Tailwind CSS |
| State | Zustand |
| Database | PostgreSQL + Prisma |
| Auth | NextAuth.js |
| AI | Anthropic Claude API |
| Storage | S3-compatible |
| Deployment | Vercel / Docker |

---

## Development

### Running Locally

```bash
# Start development server
npm run dev

# Run tests
npm run test

# Run linting
npm run lint

# Build for production
npm run build
```

### Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

---

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Docker

```bash
# Build image
docker build -t atlas .

# Run container
docker run -p 3000:3000 --env-file .env atlas
```

### Docker Compose (Full Stack)

```bash
docker-compose up -d
```

---

## API Documentation

See [docs/API.md](docs/API.md) for full API documentation.

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List all projects |
| POST | `/api/projects` | Create new project |
| GET | `/api/projects/:id` | Get project details |
| PUT | `/api/projects/:id` | Update project |
| POST | `/api/ai/research` | AI research query |
| POST | `/api/ai/generate` | AI document generation |
| POST | `/api/documents` | Upload document |
| GET | `/api/documents/:id` | Download document |

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built as part of the AEGIS autonomous business framework
- Initial project: The Cheesecake Atelier (Newton, IL)
- Powered by Anthropic's Claude AI

---

## Support

- Documentation: [docs/](docs/)
- Issues: [GitHub Issues](https://github.com/yourusername/atlas/issues)
- Discussions: [GitHub Discussions](https://github.com/yourusername/atlas/discussions)
