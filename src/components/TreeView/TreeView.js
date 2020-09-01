import { useContext } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { BlueprintsContext } from 'src/context/blueprints';
import BlueprintForm from 'src/components/BlueprintForm';
import Blueprint from 'src/components/Blueprint';

const CSS = {
  list: 'flex-1',
};

const TreeView = ({ isFormOpen, setIsFormOpen }) => {
  const { blueprints, selected } = useContext(BlueprintsContext);

  return (
    <>
      {isFormOpen && <BlueprintForm onHideForm={() => setIsFormOpen(false)} />}
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'scroll' } }}
        className={CSS.list}
      >
        <ul className={CSS.list}>
          {blueprints.map((blueprint, index) => (
            <Blueprint
              key={blueprint.id}
              blueprint={blueprint}
              isSelected={index === selected}
              showDeleteIcon={blueprints.length > 1}
            />
          ))}
        </ul>
      </OverlayScrollbarsComponent>
    </>
  );
};

export default TreeView;
