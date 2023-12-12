import '@/app/ui/global.css';
import { poppins } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | TradeHub',
    default: 'TradeHub',
  },
  description: 'Admin dashboard for the store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
