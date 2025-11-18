# UNTRAP
AI-powered career guidance platform for a student by a student.

UNTRAP is a mobile-first, AI-driven career guidance ecosystem designed exclusively for Indian students and their families. We combine cutting-edge conversational AI, culturally-intelligent family psychology modeling, and peer mentorship to transform how 150M Indian students discover and pursue their authentic career paths.[1]

***

## 📋 Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

***

## 🎯 Overview

### What is UNTRAP?

UNTRAP Technologies Private Limited is building India's first **culturally-aware, AI-powered career clarity platform** that addresses the unique challenges Indian students face: family pressure, limited exposure to modern careers, societal expectations, and mental health strain.[1]

### Market Opportunity

- **Target Market:** 150M Indian students aged 14-24
- **TAM:** ₹15,000 Cr annual market
- **Location:** Indore, Madhya Pradesh, India
- **Stage:** Pre-seed / MVP Development

### Core Problems We Solve

1. **Career Confusion** — 70%+ students unsure about career paths
2. **Family Misalignment** — Parents unaware of modern career options
3. **Limited Mentorship** — Lack of accessible, affordable guidance
4. **Mental Health Crisis** — Academic pressure without emotional support
5. **Talent Mismatch** — Students pursuing careers misaligned with natural strengths[1]

---

## ✨ Core Features

UNTRAP consists of **8 interconnected modules**, each addressing a specific student/parent need:[1]

### 1. 🌱 Saarthi 24/7 — AI Life Companion
**24/7 conversational AI mentor** with emotional intelligence, memory, and crisis detection.
- Real-time mood detection via sentiment analysis
- Contextual conversation memory across sessions
- Multi-topic support: career guidance, study strategies, wellness
- Auto-escalation to human counselors for crisis situations
- 15+ Indian languages + Hinglish support

### 2. 🎨 Dream Canvas™ — Vision Board + AI Roadmaps
**Visual dream exploration** with AI-powered, time-sequenced career roadmaps.
- Multi-format dream journaling (text, voice, images)
- Drag-drop vision board builder (Canva integration)
- AI-generated multi-phase career roadmaps
- Passion evolution tracking over time
- Privacy-first sharing circles

### 3. 👨‍👩‍👦 Family Dynamics Map™ — 360° Family Analysis
**Predict family acceptance** and build data-backed conviction strategies.
- Comprehensive 60-question family profiling
- AI classification into 15+ family archetypes
- Acceptance probability scoring (0-100%)
- 8-phase "Results-First Conviction Framework"
- Conversation scripts & evidence templates

### 4. 🧬 Natural Genius Map™ — Innate Talent Assessment
**Identify natural strengths** across 12 talent archetypes with career matching.
- 100-question multi-dimensional assessment
- 12 talent archetypes (Analyst, Creator, Connector, etc.)
- Match talents to 250+ Indian careers with utilization scores
- Career fit percentages and mastery timelines
- Family-shareable visual reports

### 5. 💡 Parent Prosperity Pod (3P) — Parental Education
**AI mentor for parents** to question inherited beliefs and understand modern careers.
- Gentle discovery mode (non-confrontational)
- Generational Bridge AI (explains new careers in familiar terms)
- Weekly 5-min video lessons on career evolution
- Parent-Student alignment meter
- Separate privacy-protected login

### 6. 🤝 Hearts of Impact™ — Peer Mentorship Marketplace
**Student-to-student mentorship** with gamified rewards and quality controls.
- Smart matching algorithm (expertise, background, language)
- Heart-based reward system (verified quality scoring)
- Tiered mentor progression (0-1000+ hearts)
- Anti-fraud detection and quality monitoring
- Paid mentorship marketplace (₹300-500/session)

### 7. 🚨 Support Circle™ — Transparent Peer Wellness
**Ethical peer monitoring** with full student control and transparency.
- Opt-in consent model (student chooses 2-4 friends)
- Transparent weekly check-ins (all feedback visible immediately)
- AI pattern recognition without revealing sources
- 90-day auto-deletion with renewal options
- Crisis keyword detection and professional escalation

### 8. 📞 On-Demand Expert Calls — Professional Marketplace
**Connect with industry experts** for 15-minute consultations.
- Verified working professionals (engineers, doctors, designers, etc.)
- ₹299-599 per 15-min call
- In-app calendar booking with automated payments
- Star ratings and review system
- Commission-based model (70% expert, 30% platform)

***

## 🛠 Tech Stack

### Frontend (Mobile-First, Cross-Platform)

```
React Native + Expo
├─ State Management: Redux Toolkit
├─ Navigation: React Navigation v6
├─ UI Components: React Native UI Kit / NativeBase
├─ Real-Time Chat: Socket.io-client
├─ Data Visualization: Victory / React Native Charts
├─ Animations: React Native Reanimated + Gesture Handler
├─ Internationalization: i18n-js (15+ Indian languages)
├─ Testing: Jest + Detox (E2E)
└─ Analytics: Firebase Analytics + Mixpanel
```

### Backend (Microservices Architecture)

```
Node.js + Express.js + TypeScript
├─ API Gateway: Nginx reverse proxy
├─ Authentication: Passport.js (JWT) + Firebase Auth
├─ Primary Database: PostgreSQL 14+
├─ Cache Layer: Redis (sessions, conversation history)
├─ Real-Time DB: Firebase Firestore
├─ Search Engine: Elasticsearch
├─ Message Queue: RabbitMQ
├─ File Storage: Firebase Cloud Storage / AWS S3
├─ CDN: Cloudflare
├─ AI Integration: OpenAI GPT-4 API
├─ Payments: Razorpay SDK
├─ Real-Time Messaging: Socket.io
├─ Voice/Video Calls: Twilio / Agora
├─ Email: SendGrid
├─ Push Notifications: Firebase Cloud Messaging (FCM)
├─ Error Tracking: Sentry
├─ Monitoring: Datadog / New Relic
├─ Logging: ELK Stack (Elasticsearch, Logstash, Kibana)
└─ Container Orchestration: Docker + Kubernetes
```

### Infrastructure & DevOps

```
Cloud Platform: Google Cloud Platform (GCP) / AWS
├─ Deployment: Expo EAS Build (mobile)
├─ CI/CD: GitHub Actions
├─ Containerization: Docker
├─ Orchestration: Kubernetes (for scaling)
├─ Secret Management: HashiCorp Vault / GCP Secret Manager
└─ Version Control: Git + GitHub
```

**Why This Stack?**
- ✅ Cross-platform mobile from single codebase
- ✅ Large Indian developer talent pool (React Native/Node.js)
- ✅ Cost-effective at startup scale
- ✅ Rapid iteration with hot reloading
- ✅ Battle-tested for real-time features (chat, notifications)
- ✅ Strong ecosystem for AI integration[2][3]

---

## 🏗 Architecture

### System Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                   CLIENT LAYER                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   iOS App    │  │ Android App  │  │  Web Portal  │ │
│  │ (React Native)│  │(React Native)│  │  (Optional)  │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   API GATEWAY                           │
│  (Nginx + Load Balancer + Rate Limiting + Auth)        │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│              MICROSERVICES LAYER                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │   Auth   │ │  Saarthi │ │  Career  │ │  Family  │  │
│  │  Service │ │ AI Service│ │ Matching │ │ Compass  │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ Payments │ │   Chat   │ │   Call   │ │Mentorship│  │
│  │  (Razorpay)│ │(Socket.io)│ │ (Twilio)│ │  Service │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │Analytics │ │Notification││  File   │ │  Admin   │  │
│  │  Service │ │  Service  │ │Management│ │  Service │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   DATA LAYER                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │PostgreSQL│ │  Redis   │ │Firestore │ │Elastic-  │  │
│  │(Primary) │ │  (Cache) │ │(Real-time)│ │ search   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐                             │
│  │Firebase  │ │RabbitMQ  │                             │
│  │ Storage  │ │  (Queue) │                             │
│  └──────────┘ └──────────┘                             │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                EXTERNAL SERVICES                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ OpenAI   │ │ Razorpay │ │  Twilio  │ │ SendGrid │  │
│  │  GPT-4   │ │ Payments │ │Video/Voice││  Email   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Database Schema Highlights

**20+ PostgreSQL tables including:**
- `users` — User profiles (students, parents, mentors, experts)
- `assessments` — Natural Genius Map responses
- `conversations` — Saarthi AI chat history
- `careers` — 250+ Indian career database
- `family_profiles` — Family Dynamics Map data
- `subscriptions` — Premium tier management
- `transactions` — Payment records
- `mentorship_sessions` — Mentor bookings
- `expert_calls` — Professional consultation records
- `hearts` — Peer mentorship rewards
- `support_circles` — Wellness monitoring data[1]

**Full database schema with relationships, constraints, and indexes provided in specification documents.**

***

## 🚀 Getting Started

### Prerequisites

- **Node.js:** v18+ LTS
- **npm:** v9+ or **yarn:** v1.22+
- **PostgreSQL:** v14+
- **Redis:** v6+
- **Expo CLI:** `npm install -g expo-cli`
- **Git:** v2.30+
- **Docker:** (Optional, for containerized development)

### Environment Setup

1. **Clone the repository:**
```bash
git clone https://github.com/untrap-technologies/untrap-app.git
cd untrap-app
```

2. **Install dependencies:**

**Frontend (Mobile App):**
```bash
cd frontend
npm install
# or
yarn install
```

**Backend (API Server):**
```bash
cd backend
npm install
# or
yarn install
```

3. **Configure environment variables:**

**Frontend `.env`:**
```env
EXPO_PUBLIC_API_URL=http://localhost:3000/api/v1
EXPO_PUBLIC_SOCKET_URL=ws://localhost:3000
EXPO_PUBLIC_ENVIRONMENT=development
```

**Backend `.env`:**
```env
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/untrap_dev
REDIS_URL=redis://localhost:6379

# JWT Authentication
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# OpenAI (Saarthi AI)
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4

# Razorpay (Payments)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Firebase
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# Twilio (Video/Voice Calls)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token

# SendGrid (Email)
SENDGRID_API_KEY=your_sendgrid_api_key

# Sentry (Error Tracking)
SENTRY_DSN=your_sentry_dsn
```

4. **Setup databases:**

**PostgreSQL:**
```bash
# Create database
createdb untrap_dev

# Run migrations
cd backend
npm run migrate
# or
yarn migrate

# Seed initial data (careers, archetypes, etc.)
npm run seed
# or
yarn seed
```

**Redis:**
```bash
# Start Redis server
redis-server
```

5. **Start development servers:**

**Backend:**
```bash
cd backend
npm run dev
# or
yarn dev

# Server starts at http://localhost:3000
```

**Frontend:**
```bash
cd frontend
npx expo start
# or
yarn start

# Opens Expo DevTools in browser
# Scan QR code with Expo Go app (iOS/Android)
```

***

## 📁 Project Structure

```
untrap-app/
├── frontend/                    # React Native mobile app
│   ├── src/
│   │   ├── api/                # API client & endpoints
│   │   ├── components/         # Reusable UI components
│   │   │   ├── atoms/         # Basic building blocks
│   │   │   ├── molecules/     # Simple combinations
│   │   │   └── organisms/     # Complex components
│   │   ├── screens/           # App screens
│   │   │   ├── onboarding/
│   │   │   ├── assessment/
│   │   │   ├── dashboard/
│   │   │   ├── saarthi/
│   │   │   ├── dream-canvas/
│   │   │   ├── family-compass/
│   │   │   ├── mentorship/
│   │   │   └── settings/
│   │   ├── navigation/        # React Navigation setup
│   │   ├── store/             # Redux store & slices
│   │   ├── utils/             # Helpers & utilities
│   │   ├── i18n/              # Translations (15+ languages)
│   │   ├── theme/             # Design tokens (colors, fonts)
│   │   └── App.tsx            # Root component
│   ├── assets/                # Images, fonts, animations
│   ├── app.json               # Expo configuration
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                     # Node.js + Express API server
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/        # API route definitions
│   │   │   ├── controllers/   # Request handlers
│   │   │   ├── middleware/    # Auth, validation, etc.
│   │   │   └── validators/    # Request validation schemas
│   │   ├── services/          # Microservices
│   │   │   ├── auth/
│   │   │   ├── saarthi-ai/
│   │   │   ├── assessment/
│   │   │   ├── career-matching/
│   │   │   ├── family-compass/
│   │   │   ├── payments/
│   │   │   ├── mentorship/
│   │   │   ├── chat/
│   │   │   ├── calls/
│   │   │   ├── notifications/
│   │   │   └── analytics/
│   │   ├── models/            # Database models (Sequelize/TypeORM)
│   │   ├── database/
│   │   │   ├── migrations/    # DB schema migrations
│   │   │   └── seeders/       # Initial data
│   │   ├── utils/             # Helpers & utilities
│   │   ├── config/            # Configuration files
│   │   └── server.ts          # Server entry point
│   ├── tests/                 # Backend tests
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                        # Documentation
│   ├── api/                    # API documentation
│   ├── architecture/           # System architecture diagrams
│   ├── database/               # Database schema docs
│   ├── design/                 # UI/UX design system
│   └── deployment/             # Deployment guides
│
├── scripts/                     # Automation scripts
│   ├── setup-dev-env.sh
│   ├── migrate-db.sh
│   ├── deploy-production.sh
│   └── backup-database.sh
│
├── .github/                     # GitHub workflows
│   └── workflows/
│       ├── ci.yml             # Continuous Integration
│       └── cd.yml             # Continuous Deployment
│
├── docker-compose.yml           # Local development with Docker
├── .gitignore
├── README.md                    # This file
└── LICENSE                      # Proprietary license
```

***

## 💻 Development

### Code Quality Standards

**Linting & Formatting:**
```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Format code with Prettier
npm run format
```

**TypeScript Type Checking:**
```bash
npm run type-check
```

**Pre-commit Hooks:**
We use **Husky** to run checks before commits:
- ESLint
- Prettier
- TypeScript type checking
- Unit tests

### Testing

**Frontend Tests:**
```bash
cd frontend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# E2E tests (Detox)
npm run test:e2e:ios
npm run test:e2e:android
```

**Backend Tests:**
```bash
cd backend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Integration tests
npm run test:integration

# E2E API tests
npm run test:e2e
```

**Coverage Target:** 80%+ for all modules[1]

### Database Migrations

**Create new migration:**
```bash
cd backend
npm run migrate:create -- migration_name
```

**Run migrations:**
```bash
npm run migrate:up
```

**Rollback migrations:**
```bash
npm run migrate:down
```

### Environment-Specific Commands

**Development:**
```bash
npm run dev        # Hot-reload development server
```

**Staging:**
```bash
npm run build:staging
npm run start:staging
```

**Production:**
```bash
npm run build:production
npm run start:production
```

***

## 📚 API Documentation

### Base URL
```
Development: http://localhost:3000/api/v1
Staging: https://api-staging.untrap.app/api/v1
Production: https://api.untrap.app/api/v1
```

### Authentication
All authenticated endpoints require Bearer token:
```http
Authorization: Bearer <JWT_TOKEN>
```

### Core API Endpoints (60+ total)

**Authentication:**
- `POST /auth/register` — User registration
- `POST /auth/login` — User login
- `POST /auth/verify-otp` — OTP verification
- `POST /auth/logout` — User logout
- `POST /auth/refresh` — Refresh JWT token

**Assessment:**
- `GET /assessments/phases` — Get assessment phases
- `POST /assessments/:phase_id/start` — Start assessment
- `POST /assessments/:phase_id/submit-response` — Submit answer
- `GET /assessments/results` — Get career matches

**Saarthi AI:**
- `POST /chat/message` — Send message to AI
- `GET /chat/history` — Get conversation history
- `POST /chat/new-conversation` — Start new conversation
- `POST /chat/escalate-to-human` — Escalate to counselor

**Career Matching:**
- `GET /careers` — List careers (filterable)
- `GET /careers/:career_id` — Get career details
- `POST /career-matching/recommend` — Get recommendations

**Family Compass:**
- `POST /family-compass/assessment` — Submit family assessment
- `GET /family-compass/dashboard` — Get family dynamics
- `POST /family-compass/conviction-strategy` — Get strategy

**Mentorship:**
- `GET /mentors/browse` — Browse mentors
- `GET /mentors/:mentor_id` — Get mentor profile
- `POST /mentors/book-session` — Book mentor session
- `POST /mentors/complete-session` — Complete session
- `GET /mentors/earnings` — Get mentor earnings

**Payments:**
- `POST /payments/create-order` — Create payment order
- `POST /payments/verify` — Verify payment
- `GET /payments/status` — Check payment status
- `POST /subscriptions/create` — Create subscription

**Full API documentation with request/response examples available in `/docs/api/` **[1]

***

## 🚀 Deployment

### iOS Deployment

**Requirements:**
- Apple Developer Account ($99/year)
- macOS with Xcode installed
- Expo EAS CLI

**Steps:**
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Configure iOS build
eas build:configure

# Build for iOS
eas build --platform ios --profile production

# Submit to App Store
eas submit --platform ios
```

### Android Deployment

**Requirements:**
- Google Play Developer Account ($25 one-time)
- Expo EAS CLI

**Steps:**
```bash
# Build for Android
eas build --platform android --profile production

# Submit to Google Play
eas submit --platform android
```

### Backend Deployment

**Production infrastructure (GCP/AWS):**

```bash
# Build Docker image
docker build -t untrap-backend:latest .

# Push to container registry
docker push gcr.io/untrap-prod/backend:latest

# Deploy to Kubernetes
kubectl apply -f k8s/production/

# Verify deployment
kubectl get pods -n untrap-production
```

**Environment Variables:**
Ensure all production secrets are stored securely:
- GCP Secret Manager / AWS Secrets Manager
- Never commit `.env` files to Git

### CI/CD Pipeline

**GitHub Actions workflows:**
- **CI:** Run tests on every PR
- **CD:** Auto-deploy to staging on merge to `develop`
- **Production:** Manual approval for `main` branch deployments

***

## 🤝 Contributing

### Development Workflow

1. **Create feature branch:**
```bash
git checkout -b feature/your-feature-name
```

2. **Make changes & commit:**
```bash
git add .
git commit -m "feat: add your feature description"
```

**Commit Message Convention (Conventional Commits):**
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting)
- `refactor:` — Code refactoring
- `test:` — Adding tests
- `chore:` — Maintenance tasks

3. **Push & create Pull Request:**
```bash
git push origin feature/your-feature-name
```

4. **Code Review:**
- All PRs require 1+ approvals
- Must pass CI checks (linting, tests, type-checking)
- Squash merge to `develop`

### Branching Strategy

```
main (production)
  ↑
develop (staging)
  ↑
feature/*, fix/*, refactor/* (development branches)
```

### Issue Labels

- `bug` — Something isn't working
- `enhancement` — New feature request
- `documentation` — Documentation improvements
- `good first issue` — Good for newcomers
- `help wanted` — Extra attention needed
- `priority: high` — Critical issue

***

## 📊 Success Metrics & KPIs

### Month 6 Targets (MVP Launch)

```
User Metrics:
├─ DAU: 5,000 users
├─ MAU: 15,000 users
├─ Premium Conversion: 5%
├─ Monthly Retention: 45%
└─ Assessment Completion: 75%

Business Metrics:
├─ MRR: ₹50L ($60K)
├─ CAC: ₹110 ($1.30)
├─ LTV: ₹1,912 ($23)
├─ LTV:CAC Ratio: 17:1
├─ Payback Period: 0.5 months
└─ Mentor Network: 500 active mentors

Revenue Projections:
├─ Year 1: ₹1.2 Cr ($140K)
├─ Year 2: ₹4.8 Cr ($575K)
└─ Year 3: ₹24 Cr ($2.9M)
```

**[Full KPI dashboard & tracking methodology in specification docs] **[2]

***

## 🔐 Security & Privacy

### Data Protection

- **Encryption:** AES-256 at rest, TLS 1.3 in transit
- **Authentication:** JWT with 7-day expiry + refresh tokens
- **Authorization:** Role-based access control (RBAC)
- **Session Management:** Redis-backed sessions with automatic expiry
- **Password Security:** bcrypt hashing (12 rounds)
- **PII Protection:** Separate encrypted storage for sensitive family data
- **Data Retention:** 2-year automatic deletion, user-deletable anytime

### Compliance

- ✅ **GDPR** — EU data protection regulation
- ✅ **IT Act 2000** — Indian data protection laws
- ✅ **COPPA** — Children's online privacy (under-13 safeguards)
- ✅ **DPDPA 2023** — Digital Personal Data Protection Act (India)

### Crisis Response Protocol

When Saarthi AI detects crisis keywords (self-harm, suicide ideation):
1. Immediate escalation to human counselor
2. Emergency contact notification (with consent)
3. Partnership integrations: YourDost, 1to1help
4. 24/7 emergency helpline display[1]

***

## 📞 Support & Contact

### Development Team

- **Tech Lead:** [Your Name]
- **Backend Lead:** [Backend Lead Name]
- **Frontend Lead:** [Frontend Lead Name]
- **AI/ML Engineer:** [AI Engineer Name]
- **UI/UX Designer:** [Designer Name]

### Communication Channels

- **Slack:** `#untrap-dev` (internal team)
- **Email:** dev@untrap.app
- **Issues:** GitHub Issues for bug reports & feature requests
- **Discussions:** GitHub Discussions for Q&A

### External Resources

- **Website:** https://untrap.app (coming soon)
- **Documentation:** https://docs.untrap.app (internal)
- **Status Page:** https://status.untrap.app (uptime monitoring)

***

## 📜 License

**Proprietary Software**

Copyright © 2025 UNTRAP Technologies Private Limited. All rights reserved.

This software and associated documentation files (the "Software") are the proprietary and confidential property of UNTRAP Technologies Private Limited. Unauthorized copying, distribution, modification, or use of this Software, via any medium, is strictly prohibited.

**Restricted Access:** This repository is private and accessible only to authorized UNTRAP team members and contractors under NDA.

For licensing inquiries: legal@untrap.app

***

## 🎉 Acknowledgments

### Technologies & Partners

- **OpenAI** — GPT-4 API for Saarthi conversational AI
- **Razorpay** — Payment processing infrastructure
- **Firebase** — Authentication, storage, and real-time database
- **Expo** — React Native build and deployment platform
- **Canva** — Vision board API integration

### Inspiration

This project is inspired by the millions of Indian students trapped in career confusion, family pressure, and societal expectations. UNTRAP exists to give every student the clarity, confidence, and conviction to pursue their authentic path.

***

## 🚀 Roadmap

### Phase 1: MVP (Months 1-6) ✅ In Progress
- ✅ Authentication & onboarding
- ✅ Natural Genius Map assessment
- ✅ Saarthi AI basic conversations
- ✅ Career matching algorithm
- 🔄 Dream Canvas vision boards
- 🔄 Family Dynamics Map
- 🔄 Payments & subscriptions

### Phase 2: Feature Expansion (Months 7-12)
- ⏳ Hearts of Impact mentorship marketplace
- ⏳ Parent Prosperity Pod
- ⏳ Support Circle wellness monitoring
- ⏳ On-Demand Expert Calls
- ⏳ B2B school partnerships
- ⏳ Advanced AI features (voice, proactive nudges)

### Phase 3: Scale (Year 2)
- ⏳ Multi-city expansion (10+ Indian cities)
- ⏳ Counselor Alliance Program (B2B2C)
- ⏳ Regional language voice AI
- ⏳ Institutional partnerships (100+ schools)
- ⏳ Corporate CSR programs

**[Full 3-year roadmap in specification docs] **[1]

***

## 📖 Additional Documentation

### Internal Resources
- **[Full Product Specification](docs/UNTRAP-App-Full-Spec-Prompt.md)** — 40,000-word complete blueprint[1]
- **[Tech Stack & Monetization](docs/UNTRAP-Tech-Stack-Monetization.md)** — Technical decisions & revenue logic[3]
- **[Executive Summary](docs/UNTRAP-Executive-Summary.md)** — High-level overview[2]
- **[API Reference](docs/api/)** — Complete API documentation
- **[Database Schema](docs/database/)** — Full schema with relationships
- **[Design System](docs/design/)** — UI/UX component library

---

**Built with ❤️ by a student for a student.**

**Break Free. Build Your Path. 🚀**
