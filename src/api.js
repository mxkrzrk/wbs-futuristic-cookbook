const fetchArticles = async () => {
  try {
    const res = await fetch(process.env.REACT_APP_API_URL + '/articles');
    const data = await res.json();
    if (res.ok) {
      return data.data;
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export { fetchArticles };
