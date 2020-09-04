import Link from 'next/link';

import Seo from 'src/layouts/Seo';
import Logo from 'src/components/Logo';
import Image from 'src/components/Image';

const CSS = {
  topBar: 'bg-indigo-600 h-1',
  header:
    'h-16 text-gray-300 mx-auto flex items-center justify-center w-full sm:justify-between sm:max-w-screen-sm lg:max-w-4xl xl:max-w-6xl',
  github: 'font-bold hidden sm:block',
  hero: `mt-12 mx-auto text-center w-full sm:max-w-xl sm:mt-24 lg:max-w-2xl xl:max-w-4xl`,
  heroTitle: 'font-black text-3xl text-gray-300 sm:text-4xl lg:text-5xl',
  heroSubtitle: 'font-medium text-base text-gray-600 mt-8 lg:text-xl',
  buttonContainer: 'mt-12 flex items-center justify-center',
  button: `bg-indigo-600 text-gray-300 font-extrabold px-16 py-4 rounded cursor-pointer hover:bg-indigo-500`,
  showcase:
    'mt-24 mx-auto w-full hidden sm:block sm:max-w-xl lg:max-w-3xl xl:max-w-5xl',
  showcaseImage: 'rounded-lg border border-gray-800 w-full h-auto',
  footer:
    'mt-20 mb-8 mx-auto text-center w-full sm:max-w-xl lg:max-w-2xl xl:max-w-4xl',
  footerText: 'text-gray-600 text-sm',
  footerUsername: 'font-semibold text-gray-300',
};

const globalStyles = `
  body {
    background-color: #1A202C;
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
  }
`;

const IndexPage = () => {
  return (
    <Seo
      title="BlueprintStack - An awesome API blueprint playground"
      styles={globalStyles}
    >
      <div className={CSS.topBar} />
      <div className={CSS.header}>
        <a href="/">
          <Logo width={200} />
        </a>
        <a
          href="https://github.com/alexalikiotis/blueprintstack"
          target="_blank"
          rel="noreferrer"
          className={CSS.github}
        >
          <span>GitHub</span>
        </a>
      </div>
      <div className={CSS.hero}>
        <h1 className={CSS.heroTitle}>An awesome API blueprint playground</h1>
        <p className={CSS.heroSubtitle}>
          BlueprintStack helps you experiment with the awesome API blueprint
          specification easily. No account required, multiple blueprint files,
          automatic preview updates and, saving your blueprints locally.
        </p>
        <div className={CSS.buttonContainer}>
          <Link href="/editor">
            <div className={CSS.button}>GET STARTED</div>
          </Link>
        </div>
      </div>
      <div className={CSS.showcase}>
        <Image
          src={require('images/showcase.png?webp')}
          placeholder={require('images/showcase.png?lqip')}
          className={CSS.showcaseImage}
        />
      </div>
      <div className={CSS.footer}>
        <span className={CSS.footerText}>
          An open source project built with {'❤️'} by{' '}
          <a
            className={CSS.footerUsername}
            href="https://github.com/alexalikiotis"
            target="_blank"
            rel="noreferrer"
          >
            @alexalikiotis
          </a>
        </span>
      </div>
    </Seo>
  );
};

export default IndexPage;
