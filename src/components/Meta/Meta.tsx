import Head from 'next/head';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  AUTHOR_NAME,
  TWITTER_USERNAME,
} from '../../utilities/constants';

type Props = {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  author?: string;
  published?: string;
  modified?: string;
  section?: string;
  tags?: [string];
  siteSection?: string;
};

const defaultProps = Object.freeze({});

const Meta: React.FC<Props> = (props: Props) => {
  const intl = useIntl();
  const router = useRouter();
  const { locales, locale, defaultLocale } = router;
  const url = SITE_URL + router.asPath;
  const ogType = router.pathname === '/' ? 'website' : 'article';
  const ogImage = props.image || DEFAULT_OG_IMAGE;
  const ogImageAlt =
    props.imageAlt || intl.formatMessage({ id: 'default_og_image_alt' });
  const siteTitle = intl.formatMessage({ id: 'site_title' });
  const title = props.title || siteTitle;
  const description =
    props.description || intl.formatMessage({ id: 'site_description' });

  // If the site has different sections, locales, etc, you can create
  // unique feeds by incoporating the variables into the feedId and feedTitle
  const feedTitle = `${siteTitle} | ${locale}`;
  const feedId = `-${locale}`;

  return (
    <Head>
      {/* General */}
      <title>{title}</title>
      <meta name='description' content={description} key='description' />
      <meta name='author' content={AUTHOR_NAME} />
      <meta name='copyright' content={AUTHOR_NAME} />
      <meta name='robots' content='index, follow' />

      {/* Localization */}
      {locales &&
        locales.map((locale) => (
          <link
            key={locale}
            rel='alternate'
            hrefLang={locale}
            href={`${SITE_URL}/${locale}/${router.asPath}`}
          />
        ))}

      {/* Feeds */}
      <link
        rel='alternate'
        type='application/rss+xml'
        title={feedTitle}
        href={`./rss/feed${feedId}.xml`}
      />
      <link
        rel='alternate'
        type='application/feed+json'
        title={feedTitle}
        href={`./rss/feed${feedId}.json`}
      />
      <link
        rel='alternate'
        type='application/atom+xml'
        title={feedTitle}
        href={`./rss/atom${feedId}.xml`}
      />

      {/* Favicons */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#00a300' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#fff' />

      {/* Social */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={TWITTER_USERNAME} />
      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content={ogType} />
      {ogType === 'article' && (
        <>
          <meta property='article:published_time' content={props.published} />
          <meta property='article:modified_time' content={props.modified} />
          <meta
            property='article:author'
            content={props.author || AUTHOR_NAME}
          />
          <meta property='article:section' content={props.section} />
          {props.tags &&
            props.tags.forEach((tag) => (
              <meta property='article:tag' content={tag} />
            ))}
        </>
      )}
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:locale' content={locale} />
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={description}
        key='ogDescription'
      />
      <meta property='og:image' content={ogImage} key='ogImage' />
      <meta property='og:image:alt' content={ogImageAlt} />
    </Head>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;
