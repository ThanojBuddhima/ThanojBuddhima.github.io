const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  require.resolve('sharp');
} catch (e) {
  execSync('npm i --no-save sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');

async function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace(/\.[^/.]+$/, '.webp'));
      try {
        await sharp(input).webp().toFile(output);
        fs.unlinkSync(input);
        console.log(`Converted ${file}`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }
}

async function main() {
  await processDir('public/certificates');
  await processDir('public/projects');
}

main().catch(console.error);
