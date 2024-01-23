import {EmbedBuilder, WebhookClient, inlineCode} from 'discord.js';
import keys from './keys';
import spells, { SpellDefinition } from './spells';
import cron from 'node-cron';

const magicSchoolsImages: Record<string, string> = {
    "Abjuration": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Abjuration-Sigil.jpg",
    "Conjuration": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Conjuration-Sigil.jpg",
    "Divination": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Divination-Sigil.jpg",
    "Enchantment": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Enchantment-Sigil.jpg",
    "Evocation": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Evocation-Sigil.jpg",
    "Illusion": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Illusion-Sigil.jpg",
    "Necromancy": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Necromancy-Sigil.jpg",
    "Transmutation": "https://blackcitadelrpg.com/wp-content/uploads/2021/09/Transmutation-Sigil.jpg",
}

const maxLevel = 3;

spells.splice(-maxLevel);

const randomSpellList = spells.flat();

const client = new WebhookClient({id: keys.webhookId, token: keys.webhookToken});

async function sendSpellMessage(client: WebhookClient, spell: SpellDefinition): Promise<void> {
    const embed = new EmbedBuilder()
    .setTitle(spell.name)
    .setURL(spell.link)
    .setDescription(spell.school)
    .setThumbnail(magicSchoolsImages[spell.school.split(' ')[0]])
    .addFields(
        {name: 'range', value: spell.range},
        {name: 'duration', value: spell.duration},
        {name: 'casting time', value: spell.castingTime},
        {name: 'components', value: spell.components},
    );

    client.send({
        content: `The spell of the day is [${spell.name}](${spell.link})!`,
        embeds: [embed]
    });
}

//cron.schedule('00 10 * * *', () => {
    const randomSpell = randomSpellList[Math.floor(Math.random()* randomSpellList.length)];
    sendSpellMessage(client, randomSpell);
//});


