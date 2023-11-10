import { ReactNode } from 'react';
import './global.css';

export const metadata = {
  title: 'full-stack-monorepo',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
