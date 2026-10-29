import './globals.css';

export const metadata = {
  title: 'Adithya Dhamodharan — Business Strategist & Environmental Infrastructure',
  description: 'Portfolio of Adithya Dhamodharan. M.Tech IIT Bombay, Business Strategist specializing in Environmental Infrastructure, PPP Models, Waste Management, and AI Evaluation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[100dvh] bg-ground text-ink selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
