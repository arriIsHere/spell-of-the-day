import {WebhookClient} from 'discord.js';
import keys from './keys';

const client = new WebhookClient({id: keys.webhookId, token: keys.webhookToken});

client.send('Test the link\n https://roll20.net/compendium/dnd5e/Ray%20of%20Frost');