import Link from 'next/link';

const CSS = {
  link: 'text-3xl ml-2 text-blue-600 hover:underline',
};

const IndexPage = () => {
  return (
    <div>
      <Link href="/editor">
        <a className={CSS.link}>Go to editor</a>
      </Link>
    </div>
  );
};

export default IndexPage;
