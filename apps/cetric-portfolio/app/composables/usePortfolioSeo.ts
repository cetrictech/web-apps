import { profile } from '~/data/profile';

export function usePortfolioSeo(title: string, description: string, path = '/', index = true) {
  const url = new URL(path, profile.url).href;
  const image = `${profile.url}/social-preview.png`;
  useSeoMeta({
    title, description, robots: index ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    ogTitle: title, ogDescription: description, ogUrl: url, ogType: 'website',
    ogSiteName: profile.name, ogLocale: 'en_KE',
    ogImage: image, ogImageWidth: 1200, ogImageHeight: 630,
    ogImageAlt: 'Cetric Okola — Founder & CEO of Staypace. Software engineer and technical leader.',
    twitterCard: 'summary_large_image', twitterTitle: title, twitterDescription: description,
    twitterImage: image, twitterImageAlt: 'Cetric Okola — Founder & CEO of Staypace',
  });
  useHead({ link: [{ rel: 'canonical', href: url }] });
}
