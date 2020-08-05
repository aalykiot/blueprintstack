import { v4 as uuid } from 'uuid';
import { useRecoilValue, useRecoilState } from 'recoil';
import { blueprintsState, selectedBlueprintState } from 'src/recoil/atoms';
import { blueprintsCount } from 'src/recoil/selectors';

export const useSelectBlueprint = () => {
  const blueprints = useRecoilValue(blueprintsState);
  const [, setSelected] = useRecoilState(selectedBlueprintState);

  return blueprint => {
    const index = blueprints.indexOf(blueprint);
    if (index !== -1) {
      setSelected(index);
    }
  };
};

export const useCreateBlueprint = () => {
  const count = useRecoilValue(blueprintsCount);
  const [blueprints, setBlueprints] = useRecoilState(blueprintsState);
  const [, setSelected] = useRecoilState(selectedBlueprintState);

  return blueprint => {
    setBlueprints([
      ...blueprints,
      {
        id: uuid(),
        ...blueprint,
      },
    ]);
    setSelected(count);
  };
};

export const useUpdateBlueprint = () => {
  const [blueprints, setBlueprints] = useRecoilState(blueprintsState);
  const selected = useRecoilValue(selectedBlueprintState);

  return newValue => {
    setBlueprints(
      blueprints.map((blueprint, index) =>
        index === selected ? { ...blueprint, code: newValue } : blueprint
      )
    );
  };
};

export const useDeleteBlueprint = () => {
  const count = useRecoilValue(blueprintsCount);
  const [blueprints, setBlueprints] = useRecoilState(blueprintsState);
  const [, setSelected] = useRecoilState(selectedBlueprintState);

  return blueprint => {
    if (count > 1) {
      setBlueprints(blueprints.filter(b => b.id !== blueprint.id));
      setSelected(-1);
    }
  };
};
