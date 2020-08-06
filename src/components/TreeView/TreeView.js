import { useContext } from 'react';
import { BlueprintsContext } from 'src/context/blueprints';
import BlueprintForm from 'src/components/BlueprintForm';
import Blueprint from 'src/components/Blueprint';

const CSS = {
  list: 'flex-1 overflow-scroll',
};

const TreeView = ({ isFormOpen, setIsFormOpen }) => {
  const { blueprints, selected } = useContext(BlueprintsContext);

  return (
    <ul className={CSS.list}>
      {isFormOpen && (
        <BlueprintForm handleHideForm={() => setIsFormOpen(false)} />
      )}
      {blueprints.map((blueprint, index) => (
        <Blueprint
          key={blueprint.id}
          blueprint={blueprint}
          isSelected={index === selected}
        />
      ))}
    </ul>
  );
};

export default TreeView;
