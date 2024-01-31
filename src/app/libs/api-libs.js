export const getAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = response.json();
  return anime;
};

export const getNestedAnime = async (resource, objectProperty) => {
  const response = await getAnime(resource);
  return response.data.flatMap((item) => item.entry);
};

export const randomData = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
