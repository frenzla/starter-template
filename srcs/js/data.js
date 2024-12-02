// data.js

// Step 1: Dynamically load images using require.context()
const images = require.context(
  "../../assets",
  false,
  /\.(jpg|svg|jpeg|png|gif)$/,
);
// Step 2: Create a key-value structure where the key is the image name (without the extension)
export const imgFiles = images.keys().reduce((acc, imagePath) => {
  // Get the filename without the extension (e.g., 'rest' for 'rest.jpg')
  const imageName = imagePath.replace("./", "").replace(/\.[^/.]+$/, "");
  // Add the image name as the key, and the image as the value in the object
  acc[imageName] = images(imagePath);
  return acc;
}, {});
