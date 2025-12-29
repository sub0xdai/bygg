import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { heliusWebhook } from './webhooks/helius';

const app = new Hono();

app.use('*', logger());

app.get('/health', (c) => c.json({ status: 'ok' }));

app.route('/webhooks/helius', heliusWebhook);

const port = process.env.PORT || 3001;

console.log(`Indexer running on port ${port}`);

export default {
  port,
  fetch: app.fetch,
};
