# AI Content Generator

> Built by [BuilON](https://builon.com) for [JustXend](https://justxend.com)

Generate ready-to-post content for any platform in seconds — just pick your topic, tone, and platform. No more staring at a blank screen.

---

## Live Demo

| Service | URL |
|---|---|
| Backend API | _Coming soon_ |
| Frontend | _Coming soon_ |

---

## What It Does

- Input a topic, select a platform, tone, and length
- GPT-4o generates polished, platform-ready content instantly
- Supports Twitter/X threads, LinkedIn posts, Instagram captions, YouTube scripts, and Blog articles
- Five tone options: Professional, Casual, Funny, Inspirational, Educational

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, FastAPI |
| AI | OpenAI GPT-4o |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Hosting | Render (backend), Vercel (frontend) |

---

## Project Structure

```
ai-content-gen/
├── backend/
│   ├── main.py              # API routes
│   ├── content_engine.py    # Calls GPT-4o to generate content
│   ├── prompt_builder.py    # Builds platform & tone-specific prompts
│   └── config.py            # Environment config
├── frontend/                # Next.js app
├── render.yaml              # Render deployment config
├── requirements.txt
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/options` | Returns valid platforms and tones |
| POST | `/generate` | Generate content from topic, platform, tone, length |

### Example Request

```json
POST /generate
{
  "topic": "Why consistency beats motivation",
  "platform": "linkedin",
  "tone": "inspirational",
  "length": "medium"
}
```

### Example Response

```json
{
  "content": "Most people wait for motivation...",
  "platform": "linkedin",
  "tone": "inspirational"
}
```

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/PerceptronCipher/ai-content-gen.git
cd ai-content-gen

# Set up backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run backend (OPENAI_API_KEY must be set in your shell)
cd backend
uvicorn main:app --reload

# Run frontend
cd frontend
npm install
npm run dev
```

---

## Supported Platforms & Tones

**Platforms:** Twitter/X · LinkedIn · Instagram · YouTube · Blog

**Tones:** Professional · Casual · Funny · Inspirational · Educational

---

## License

MIT © 2025 BuilON