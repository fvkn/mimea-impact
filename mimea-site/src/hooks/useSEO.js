import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const useSEO = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;

    // Define meta content based on current route and language
    const getPageMeta = () => {
      const baseUrl = 'https://www.mimea-impact.ch';

      // Default meta
      let meta = {
        title: t('hero.title') || 'Mimea Impact',
        description: t('hero.subtitle') || ''
      };

      // Customize based on route
      if (location.pathname === '/about') {
        meta.title = `${t('nav.about')} | Mimea Impact`;
        meta.description = t('about.intro') || '';
      } else if (location.pathname === '/projects') {
        meta.title = `${t('nav.projects')} | Mimea Impact`;
        meta.description = t('projects.title') || '';
      } else if (location.pathname === '/projects/lumo') {
        meta.title = `${t('projects.lumo.title')} | Mimea Impact`;
        meta.description = t('projects.lumo.description') || '';
      } else if (location.pathname === '/projects/moringa') {
        meta.title = `${t('projects.moringa.title')} | Mimea Impact`;
        meta.description = t('projects.moringa.description') || '';
      } else if (location.pathname === '/support') {
        meta.title = `${t('nav.support')} | Mimea Impact`;
      } else if (location.pathname === '/contact') {
        meta.title = `${t('nav.contact')} | Mimea Impact`;
      }

      return { ...meta, baseUrl };
    };

    const { title, description, baseUrl } = getPageMeta();

    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `${baseUrl}${location.pathname}`);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', `${baseUrl}${location.pathname}`);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${location.pathname}`);

    // Add hreflang tags
    const updateHreflang = () => {
      // Remove existing hreflang tags
      document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

      // Add new hreflang tags for all languages
      const languages = ['de', 'fr', 'en'];
      languages.forEach(lang => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        link.setAttribute('href', `${baseUrl}${location.pathname}?lang=${lang}`);
        document.head.appendChild(link);
      });

      // Add x-default
      const defaultLink = document.createElement('link');
      defaultLink.setAttribute('rel', 'alternate');
      defaultLink.setAttribute('hreflang', 'x-default');
      defaultLink.setAttribute('href', `${baseUrl}${location.pathname}`);
      document.head.appendChild(defaultLink);
    };

    updateHreflang();
  }, [i18n.language, location, t]);
};

export default useSEO;
