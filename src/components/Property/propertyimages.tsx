import React, { useState } from 'react';

interface PropertyImagesProps {
  images: { url: string }[];
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.url || 'https://via.placeholder.com/400');

  return (
    <div className="property-images">
      {/* Main Image */}
      <img src={selectedImage} alt="Selected property" className="w-full h-64 object-cover rounded-lg" />

      {/* Thumbnails */}
      <div className="thumbnails flex gap-2 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer ${
              selectedImage === image.url ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(image.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
