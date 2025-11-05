import { execSync } from 'node:child_process';

const target = process.argv[2];

if (!target) {
  console.error('Usage: node scripts/build-with-base-href.mjs <staging|production>');
  process.exit(1);
}

const CONFIG = {
  production: {
    envVar: 'PROD_BASE_HREF',
    fallback: 'https://mantismirror.com/',
    label: 'production',
  },
  staging: {
    envVar: 'STAGING_BASE_HREF',
    fallback: undefined,
    label: 'staging',
  },
};

if (!Object.prototype.hasOwnProperty.call(CONFIG, target)) {
  console.error(`Unknown target "${target}". Expected one of: ${Object.keys(CONFIG).join(', ')}`);
  process.exit(1);
}

const { envVar, fallback, label } = CONFIG[target];
const baseHref = process.env[envVar] ?? fallback;

if (!baseHref) {
  console.error(`Missing base href for ${label} build. Set the ${envVar} environment variable.`);
  process.exit(1);
}

const normalizedBaseHref = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;

console.log(`Building Angular app for ${label} with base href: ${normalizedBaseHref}`);

try {
  execSync(
    `npx ng build --configuration production --base-href=${normalizedBaseHref} --ssr=false`,
    {
      stdio: 'inherit',
    },
  );
} catch (error) {
  process.exit(error.status ?? 1);
}
