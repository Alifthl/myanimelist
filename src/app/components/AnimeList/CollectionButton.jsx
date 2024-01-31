"use client";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    console.log({ collection });
  };
  return (
    <button onClick={handleCollection} className="p-2 bg-color-accent">
      Add To Collection
    </button>
  );
};

export default CollectionButton;
