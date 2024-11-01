import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { env } from '@/core/config/env';
import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'Sense x Guardians',
  description: 'Sense x Guardians burn event', 
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <Root>
          {children}
        </Root>
      </body>
    </html>
  );
}
