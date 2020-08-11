import produce from 'immer';
import { createContext, useReducer, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

const initState = {
  blueprints: [
    {
      id: uuid(),
      name: 'Getting started',
      color: '#667EEA',
      code: `# GET /message\n + Response 200 (text/plain)\n\n\t\t Hello World!`,
    },
  ],
  selected: 0,
};

const blueprintsReducer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'CREATE_BLUEPRINT': {
        draft.blueprints.push({ id: uuid(), ...action.payload });
        draft.selected = draft.blueprints.length - 1;
        break;
      }
      case 'REMOVE_BLUEPRINT': {
        if (draft.blueprints.length > 1) {
          draft.blueprints = draft.blueprints.filter(
            b => b.id !== action.payload
          );
          draft.selected = -1;
        }
        break;
      }
      case 'SELECT_BLUEPRINT': {
        const index = draft.blueprints.findIndex(b => b.id === action.payload);
        draft.selected = index !== -1 ? index : draft.selected;
        break;
      }
      case 'UPDATE_BLUEPRINT':
        draft.blueprints[draft.selected].code = action.payload;
        break;
      default:
        break;
    }
  });

export const BlueprintsContext = createContext();

export const BlueprintsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blueprintsReducer, initState);

  const select = payload => dispatch({ type: 'SELECT_BLUEPRINT', payload });
  const create = payload => dispatch({ type: 'CREATE_BLUEPRINT', payload });
  const remove = payload => dispatch({ type: 'REMOVE_BLUEPRINT', payload });
  const update = payload => dispatch({ type: 'UPDATE_BLUEPRINT', payload });

  const contextValue = useMemo(() => ({
    blueprints: state.blueprints,
    blueprint: state.blueprints[state.selected],
    selected: state.selected,
    select,
    create,
    remove,
    update,
  }));

  return (
    <BlueprintsContext.Provider value={contextValue}>
      {children}
    </BlueprintsContext.Provider>
  );
};
