import Dexie from 'dexie';

const db = new Dexie('BlueprintStackDB');

db.version(1).stores({
  blueprints: 'id,name,color,code',
});

export const getAllBlueprints = async () => {
  const blueprints = await db.blueprints.toArray();
  return blueprints;
};

export const saveBlueprint = async blueprint => {
  await db.blueprints.add(blueprint);
};

export const deleteBlueprint = async id => {
  await db.blueprints.where('id').equals(id).delete();
};

export const updateBlueprint = async (id, code) => {
  await db.blueprints.where('id').equals(id).modify({ code });
};
