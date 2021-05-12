export const getCharacters = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const results = await res.json();
  return results.map(({ _id, name, japaneseName, image }) => ({
    _id,
    name,
    japaneseName,
    image,
  }));
};
