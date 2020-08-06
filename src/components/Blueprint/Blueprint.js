import classnames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import { useSelectBlueprint, useDeleteBlueprint } from 'src/recoil/hooks';

const CSS = {
  blueprint:
    'flex items-center px-2 py-1 rounded-sm mb-1 cursor-pointer hover:bg-gray-800',
  blueprintActive: 'bg-gray-800',
  blueprintDot: 'w-1 h-1 rounded mr-2',
  blueprintText: 'truncate text-sm flex-1',
  close: 'cursor-pointer text-gray-600 hover:text-gray-400',
};

const Blueprint = ({ blueprint, isSelected }) => {
  const select = useSelectBlueprint();
  const remove = useDeleteBlueprint();

  const handleOnSelect = () => {
    select(blueprint);
  };

  const handleOnDelete = e => {
    e.stopPropagation();
    remove(blueprint);
  };

  return (
    <div
      className={classnames(`${CSS.blueprint}`, {
        [`${CSS.blueprintActive}`]: isSelected,
      })}
      key={blueprint.id}
      onClick={handleOnSelect}
    >
      <div
        className={CSS.blueprintDot}
        style={{ backgroundColor: blueprint.color }}
      />
      <span
        className={classnames(`${CSS.blueprintText}`, {
          ['text-gray-300']: isSelected,
          ['text-gray-600']: !isSelected,
        })}
      >
        {blueprint.name}
      </span>
      {isSelected && (
        <IoMdClose className={CSS.close} onClick={handleOnDelete} />
      )}
    </div>
  );
};

export default Blueprint;
