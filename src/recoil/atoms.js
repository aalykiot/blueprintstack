import { atom } from 'recoil';
import { v4 as uuid } from 'uuid';

const defaultState = [
  {
    id: uuid(),
    name: 'Getting started',
    color: '#c04af6',
    code: `FORMAT: 1A

# GET /message
+ Response 200 (text/plain)
  
      Hello World!
    `,
  },
];

export const blueprintsState = atom({
  key: 'blueprints',
  default: defaultState,
});

export const selectedBlueprintState = atom({
  key: 'selectedBlueprint',
  default: 0,
});
