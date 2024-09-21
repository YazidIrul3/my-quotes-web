export const usePostUser = async (data, path) => {
  const fetchData = await fetch("http://localhost:8000/api/" + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const dataJson = await fetchData.json();

  return {
    dataJson,
  };
};
