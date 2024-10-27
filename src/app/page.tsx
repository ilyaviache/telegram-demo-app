'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

import tonSvg from './_assets/ton.svg';

export default function Home() {
  const t = useTranslations('i18n');

  return (
    <Page back={false}>
      <div className="container mx-auto px-4 py-8 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Sense</h1>
        <Card className="mb-8 bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl">Guardiance by Seedorova</CardTitle>
            <CardDescription className="text-gray-400">1,024 unique art-objects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-gray-700 rounded-md"></div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gray-700 hover:bg-gray-600">Connect Wallet</Button>
          </CardFooter>
        </Card>
        <p className="text-center text-sm text-gray-400 mb-8">
          Connect your wallet to buy and mint NFT
        </p>

        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link href="/ton-connect">
            <Cell
              before={
                <Image
                  src={tonSvg.src}
                  style={{ backgroundColor: '#007AFF' }}
                />
              }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link href="/init-data">
            <Cell subtitle="User data, chat information, technical data">
              Init Data
            </Cell>
          </Link>
          <Link href="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">
              Launch Parameters
            </Cell>
          </Link>
          <Link href="/theme-params">
            <Cell subtitle="Telegram application palette information">
              Theme Parameters
            </Cell>
          </Link>
        </Section>
      </div>
    </Page>
  );
}