// worst-superpower-461dcdbe: Worst Superpower.
// This program writes exactly one line to /output/entry.txt, where the
// gate reads it. The line invents the most useless superpower imaginable:
// a power so pointless that naming it is the whole joke.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The power: I can sense exactly when the microwave will beep — one second
// after it beeps. It is genuinely useless, not a curse and not quietly
// helpful: the knowledge arrives only once it is worthless. It is funny
// to picture in use — a hero standing in the kitchen, eyes closed in
// concentration, announcing the beep a beat late every single time.
// It is unexpected (no flight, no invisibility, no mind-reading) and
// tight and specific: one concrete household detail, the microwave beep,
// fixes the power in the world. One line, one reading, no setup needed.
const LINE = 'I can sense exactly when the microwave will beep — one second after it beeps.';

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0 || LINE.includes('\n')) {
  console.error('entry must be one line of 1-140 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote "${LINE}" (${LINE.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
