# TipSplitter

A modern, responsive tip calculator app built with Next.js, React, and Tailwind CSS. TipSplitter helps you calculate tips and split bills among friends with an elegant pink and purple color scheme.

## 🚀 Features

- **Bill Input**: Enter the total bill amount
- **Tip Customization**: Adjust tip percentage using an interactive slider (0-30%)
- **People Counter**: Specify the number of people to split the bill
- **Real-time Calculations**: Instant calculation of:
  - Tip amount
  - Total bill (including tip)
  - Amount per person
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, minimalist interface with pink and purple theming

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1 with App Router
- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: React hooks (useState)
- **Testing**: Jest with ts-jest for TypeScript support
- **AI Integration**: Google Genkit for AI features
- **Development**: Turbopack for fast development builds

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:9002`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with verbose output:
```bash
npm test -- --verbose
```

The project includes comprehensive unit tests for the utility functions, ensuring code reliability and maintainability.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack on port 9002
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm test` - Run Jest tests
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit development server
- `npm run genkit:watch` - Start Genkit in watch mode

## 🏗️ Project Structure

```
src/
├── ai/                 # AI integration with Genkit
│   ├── ai-instance.ts
│   └── dev.ts
├── app/                # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx        # Main TipSplitter component
├── components/         # Reusable UI components
│   ├── ui/            # Radix UI components with custom styling
│   └── icons.ts       # Icon components
├── hooks/             # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/               # Utility functions
    ├── utils.ts       # Class name utilities (cn function)
    └── utils.test.ts  # Unit tests for utilities
```

## 🎨 Design System

- **Primary Color**: Light pink (#FFB6C1) for a soft, inviting feel
- **Secondary Color**: Lavender (#E6E6FA) to complement the pink
- **Accent Color**: Deep purple (#800080) for interactive elements
- **Typography**: Clean, readable fonts for all text elements
- **Layout**: Minimalist, card-based design for optimal user experience

## 🚀 Usage

1. Enter the total bill amount in the "Bill Amount" field
2. Adjust the tip percentage using the slider (default: 15%)
3. Specify the number of people splitting the bill
4. View real-time calculations for:
   - Tip amount
   - Total bill including tip
   - Amount each person should pay

## 🤝 Contributing

Contributions are welcome! Please ensure all tests pass before submitting a pull request:

1. Run tests: `npm test`
2. Check types: `npm run typecheck`
3. Lint code: `npm run lint`

## 📄 License

This project is private and not currently licensed for public use.

---

**Built with ❤️ using Next.js and modern web technologies**
