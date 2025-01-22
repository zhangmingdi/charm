import {getRequestConfig} from 'next-intl/server';
import {routing,Local} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 console.log('asdasd',locale);
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Local)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});