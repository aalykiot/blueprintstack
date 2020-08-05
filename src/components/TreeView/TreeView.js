import { useRecoilValue } from 'recoil';
import { blueprintsState, selectedBlueprintState } from 'src/recoil/atoms';
import BlueprintForm from 'src/components/BlueprintForm';
import Blueprint from 'src/components/Blueprint';

const CSS = {
  list: 'flex-1 overflow-scroll',
};

const TreeView = ({ showForm, setShowForm }) => {
  const blueprints = useRecoilValue(blueprintsState);
  const selected = useRecoilValue(selectedBlueprintState);

  return (
    <ul className={CSS.list}>
      {showForm && <BlueprintForm handleHideForm={() => setShowForm(false)} />}
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
