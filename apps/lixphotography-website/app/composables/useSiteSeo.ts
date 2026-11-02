import { siteInfo } from '~/data/site';

export function useSiteSeo(title: string, description: string, path = '/') {
  const url = new URL(path, siteInfo.url).href;
  const image = `${siteInfo.url}/images/portfolio/IMG_8791.JPG.jpeg`;
  useSeoMeta({
    title, description,
    robots: 'index, follow, max-image-preview:large',
    ogTitle: title, ogDescription: description, ogUrl: url,
    ogType: 'website', ogSiteName: siteInfo.name, ogLocale: 'en_KE',
    ogImage: image, ogImageWidth: 4160, ogImageHeight: 2774, ogImageAlt: 'Family portrait by Lix Photography, Kisumu',
    twitterCard: 'summary_large_image', twitterTitle: title,
    twitterDescription: description, twitterImage: image,
    twitterImageAlt: 'Family portrait by Lix Photography, Kisumu',
  });
  useHead({ link: [{ rel: 'canonical', href: url }] });
}
