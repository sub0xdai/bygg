import { Hono } from 'hono';

export const heliusWebhook = new Hono();

interface HeliusWebhookPayload {
  type: string;
  timestamp: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

heliusWebhook.post('/', async (c) => {
  const authHeader = c.req.header('Authorization');
  const expectedToken = process.env.HELIUS_WEBHOOK_SECRET;

  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const payload = await c.req.json<HeliusWebhookPayload>();

    // TODO: Process webhook payload and write to database
    console.log('Received Helius webhook:', payload.type);

    return c.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return c.json({ error: 'Processing failed' }, 500);
  }
});
