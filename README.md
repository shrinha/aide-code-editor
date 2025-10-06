# 🧠 AideCode Editor – AI-Powered Web IDE



**AIDE (A IDE)** is a blazing-fast, AI-integrated web IDE built entirely in the browser using **Next.js App Router**, **WebContainers**, **Monaco Editor**, and **local LLMs via Ollama**. It offers real-time code execution, an AI-powered chat assistant, and support for multiple tech stacks — all wrapped in a stunning developer-first UI.

Currently hosted at Vercel.

https://aide-code-editor.vercel.app/auth/sign-in

---

## 🚀 Features

- 🔐 **OAuth Login with NextAuth** – Supports Google & GitHub login.
- 🎨 **Modern UI** – Built with TailwindCSS & ShadCN UI.
- 🌗 **Dark/Light Mode** – Seamlessly toggle between themes.
- 🧱 **Project Templates** – Choose from React, Next.js, Express, Hono, Vue, or Angular.
- 🗂️ **Custom File Explorer** – Create, rename, delete, and manage files/folders easily.
- 🖊️ **Enhanced Monaco Editor** – Syntax highlighting, formatting, keybindings, and AI autocomplete.
- 💡 **AI Suggestions with Ollama** – Local models give you code completion on `Ctrl + Space` or double `Enter`. Accept with `Tab`.
- ⚙️ **WebContainers Integration** – Instantly run frontend/backend apps right in the browser.
- 💻 **Terminal with xterm.js** – Fully interactive embedded terminal experience.
- 🤖 **AI Chat Assistant** – Share files with the AI and get help, refactors, or explanations.

---

## 🧱 Tech Stack

| Layer         | Technology                                      |
|---------------|-------------------------------------------------|
| Framework     | Next.js 15 (App Router)                         |
| Styling       | TailwindCSS, ShadCN UI                          |
| Language      | TypeScript                                      |
| Auth          | NextAuth (Google + GitHub OAuth)                |
| Editor        | Monaco Editor                                   |
| AI Suggestion | Ollama (LLMs running locally via Docker)/Gemini |
| Runtime       | WebContainers                                   |
| Terminal      | xterm.js                                        |
| Database      | MongoDB (via DATABASE_URL)                      |

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/aidecode-editor.git
cd aidecode-editor
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file using the template:

```bash
cp .env.example .env
```

Then, fill in your credentials:

```env
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=your API Key for Gemini
OLLAMA_API_URL=http://localhost:11434
```

### 4. Start Local Ollama Model

Make sure [Ollama](https://ollama.com/) and Docker are installed, then run:

```bash
ollama run codellama
```

Or use your preferred model that supports code generation

To use your custom model:
1. Add corresponding API key in `.env`
2. Navigate to `app/api/chat/route.ts` and `app/api/code-suggestion/route.ts`
3. Copy the existing `generateAISuggestion` and `generateAIResponse` functions (currently provided for Ollama and Gemini)
4. Create your own AI model functions following the same pattern
5. Replace the function call in this line:
   ```typescript
   const aiResponse = await generateAIResponseGemini(messages)
   ```
   with your custom function name

### 5. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
.
├── app/                     # App Router-based pages & routes
├── components/              # UI components
├── editor/                 # Monaco, File Explorer, Terminal
├── lib/                     # Utility functions
├── public/                  # Static files (incl. thumbnail)
├── utils/                   # AI helpers, WebContainer logic
├── .env.example             # Example env vars
└── README.md
```

---

## 🎯 Keyboard Shortcuts

* `Ctrl + Space` or `Double Enter`: Trigger AI suggestions
* `Tab`: Accept AI suggestion

---

## ⌛ Ongoing

- Support Model Context Protocol and External Tool Migration
- Direct import from Github
- Add more language support: C++,Python...


## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

* [Monaco Editor](https://microsoft.github.io/monaco-editor/)
* [Ollama](https://ollama.com/) – for offline LLMs
* [WebContainers](https://webcontainers.io/)
* [xterm.js](https://xtermjs.org/)
* [NextAuth.js](https://next-auth.js.org/)



