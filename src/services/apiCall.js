const URL = 'https://ac-vill.herokuapp.com/villagers';

export const getCharacters = async () => {
  const res = await fetch(URL);
  const results = await res.json();
  return results.map(({ _id, name, japaneseName, image }) => ({
    _id,
    name,
    japaneseName,
    image,
  }));
};

export const getCharacterDetail = async (_id) => {
  const res = await fetch(`${URL}/${_id}`);
  return await res.json();
};
