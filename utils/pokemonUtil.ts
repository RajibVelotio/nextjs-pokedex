const calculatePokeIndex = (id: number) => {
  if (id >= 100) {
    return id;
  } else {
    return ('000' + id).slice(-3);
  }
};

export { calculatePokeIndex };
