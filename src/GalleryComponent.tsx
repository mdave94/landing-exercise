const GalleryComponent = () => {
  const images = [
    require("./assets/gallery/1.jpg"),
    require("./assets/gallery/2.jpg"),
    require("./assets/gallery/3.jpg"),
    require("./assets/gallery/4.jpg"),
    require("./assets/gallery/5.jpg"),
    require("./assets/gallery/6.jpg"),
    require("./assets/gallery/7.jpg"),
  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-item"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      ))}
    </div>
  );
};

export default GalleryComponent;
