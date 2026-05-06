import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const publicDownloadsDir = resolve(here, '..', '..', 'public', 'downloads');

export function downloadFileExists(filename: string): boolean {
  if (!filename) return false;
  return existsSync(resolve(publicDownloadsDir, filename));
}
