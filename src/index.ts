import {WebhookClient} from 'discord.js';
import keys from './keys';

const client = new WebhookClient({id: keys.webhookId, token: keys.webhookToken});

client.send('Test the link\n http://dnd5e.wikidot.com/spell:cause-fear');