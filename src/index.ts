import {WebhookClient} from 'discord.js';
import keys from './keys';

const client = new WebhookClient({id: keys.webhookId, token: keys.webhookToken});

client.send('Test the messages');