const CSS = {
  preview: 'empty-preview flex h-full items-center justify-center px-12',
  previewText: 'text-gray-600',
};

const Preview = () => {
  return (
    <div className={CSS.preview}>
      <h1 className={CSS.previewText}>WIP</h1>
    </div>
  );
};

export default Preview;
