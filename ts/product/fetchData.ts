const fetchData = async () => {
  const response = await fetch('../data.json')
  console.log(response);
}

export default fetchData;