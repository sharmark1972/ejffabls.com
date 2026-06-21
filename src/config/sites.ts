export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ejffabls: {
    slug: 'ejffabls',
    domain: 'ejffabls.com',
    name: 'European Journal of Food, Fashion and Allied Bio-Life Sciences',
    shortName: 'EJFFABLS',
    description: 'Food, Fashion and Bio-Life Sciences Research',
    dbEnvVar: 'DATABASE_URL_EJFFABLS',
    smtpUserEnvVar: 'SMTP_USER_EJFFABLS',
    smtpPassEnvVar: 'SMTP_PASS_EJFFABLS',
    smtpFromEnvVar: 'SMTP_FROM_EJFFABLS',
    r2BucketEnvVar: 'R2_BUCKET_EJFFABLS',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_EJFFABLS',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_EJFFABLS',
  },
};

const DEV_SITE_SLUG = 'ejffabls';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
