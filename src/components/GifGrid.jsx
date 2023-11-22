import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {images.map((gif) => (
            <div key={gif.id}>
              <h4>{gif.title}</h4>
              <img src={gif.url} alt={gif.title} />
            </div>
          ))}
        </div>
      )}
      <p>Información</p>
    </>
  );
};