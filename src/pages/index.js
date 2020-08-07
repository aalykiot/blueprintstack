import Link from 'next/link';
import Logo from 'src/components/Logo';
import { IoLogoGithub } from 'react-icons/io';

const CSS = {
  page: 'bg-gray-900 h-full w-full text-white overflow-hidden',
  header: 'py-6',
  headerContent: 'width-constraint flex items-center justify-between',
  social: 'flex items-center',
  github: 'cursor-pointer text-gray-200 hover:text-white',
  hero: `width-constraint align-center text-center flex flex-col items-center my-16`,
  heroSlogan: 'mb-8 text-4xl font-bold text-gray-200',
  heroDescription: 'mb-8 text-gray-600',
  heroLink: 'cursor-pointer text-gray-400 hover:underline',
  heroButton: `my-5 px-16 py-4 rounded font-bold bg-indigo-600 cursor-pointer hover:bg-indigo-700`,
};

const IndexPage = () => {
  return (
    <div className={CSS.page}>
      <div className={CSS.header}>
        <div className={CSS.headerContent}>
          <a href="/">
            <Logo width={130} />
          </a>
          <div className={CSS.social}>
            <IoLogoGithub className={CSS.github} size={30} />
          </div>
        </div>
      </div>
      <div className={CSS.hero}>
        <h1 className={CSS.heroSlogan}>
          Experiment with API Blueprint like a PRO
        </h1>
        <p className={CSS.heroDescription} style={{ maxWidth: 800 }}>
          Draftic helps you experiment with the awesome{' '}
          <a
            href="https://apiblueprint.org/"
            target="_blank"
            rel="noreferrer"
            className={CSS.heroLink}
          >
            API blueprint
          </a>{' '}
          specification easily. No account required, multiple blueprint files,
          automatic preview updates and, saving your work locally.
        </p>

        <Link href="/editor">
          <a className={CSS.heroButton}>Try it now</a>
        </Link>
      </div>
      <div className="width-constraint">
        <img
          src="/static/images/showcase.png"
          alt="showcase"
          className="rounded border-t border-gray-700"
        />
      </div>
    </div>
  );
};

export default IndexPage;
