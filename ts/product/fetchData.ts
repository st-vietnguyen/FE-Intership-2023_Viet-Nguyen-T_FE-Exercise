const fetchData = async (url: string, callback) => {
  await fetch(url)
    .then((res) => res.json())
    .then((result) => callback(result));
};

export default fetchData;
