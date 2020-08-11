import Link from 'next/link';
import { IoMdStar } from 'react-icons/io';
import Seo from 'src/layouts/Seo';
import Logo from 'src/components/Logo';

const CSS = {
  topBar: 'bg-indigo-500 h-2',
  headerWrapper: 'h-16 flex items-center text-gray-300',
  header: 'container flex items-center justify-between mx-auto px-16',
  github: 'font-mplus-1p font-bold ',
  hero: `mt-24 container mx-auto max-w-3xl xl:max-w-4xl text-center font-mplus-1p`,
  heroTitle: 'font-black text-5xl text-gray-300',
  heroSubtitle: 'font-medium text-xl text-gray-600 mt-12',
  heroActions: 'mt-16 flex items-center justify-center',
  startButton: `bg-indigo-500 text-gray-300 font-extrabold px-16 py-4 rounded cursor-pointer mr-8 hover:bg-indigo-600`,
  starButton: `bg-gray-800 hover:bg-grayer text-gray-300 font-extrabold px-16 py-4 rounded flex items-center`,
  starButtonIcon: 'mr-2',
  showcaseWrapper: 'mt-24 container mx-auto px-16',
  showcase: 'rounded',
  footer: 'font-mplus-1p mt-20 mb-8 container mx-auto px-16 text-center',
  footerText: 'text-gray-600 text-sm',
  footerUsername: 'font-semibold text-gray-300',
};

const globalStyles = `
  body {
    background-color: #1A202C;
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
      <div className={CSS.headerWrapper}>
        <div className={CSS.header}>
          <a href="/">
            <Logo width={200} />
          </a>
          <a
            href="https://github.com/alexalikiotis/blueprintstack"
            target="_blank"
            rel="noreferrer"
          >
            <div className={CSS.github}>GitHub</div>
          </a>
        </div>
      </div>
      <div className={CSS.hero}>
        <h1 className={CSS.heroTitle}>An awesome API blueprint playground</h1>
        <p className={CSS.heroSubtitle}>
          BlueprintStack helps you experiment with the awesome API blueprint
          specification easily. No account required, multiple blueprint files,
          automatic preview updates and, saving your blueprints locally.
        </p>
        <div className={CSS.heroActions}>
          <Link href="/editor">
            <div className={CSS.startButton}>GET STARTED</div>
          </Link>
          <a
            href="https://github.com/alexalikiotis/blueprintstack/stargazers"
            target="_blank"
            rel="noreferrer"
          >
            <div className={CSS.starButton}>
              <IoMdStar size={22} className={CSS.starButtonIcon} />
              <span>STAR</span>
            </div>
          </a>
        </div>
      </div>
      <div className={CSS.showcaseWrapper}>
        <img className={CSS.showcase} src="/static/images/showcase.png" />
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
