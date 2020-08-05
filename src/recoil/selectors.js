import { selector } from 'recoil';
import { blueprintsState } from 'src/recoil/atoms';

export const blueprintsCount = selector({
  key: 'blueprintsCount',
  get: ({ get }) => {
    const blueprints = get(blueprintsState);
    return blueprints.length;
  },
});
