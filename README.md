# useImgReducer Hook
useImgReducer is a custom React hook designed to reduce the size of an image by scaling it down while maintaining the aspect ratio. It accepts a URL for the image, the image format to output (e.g., png, jpg, avif), and a scale factor for resizing. The hook fetches the image, resizes it using a canvas, and then returns the image in the specified format as a blob URL.


## Usage
- **url (string)**: The URL of the image to be fetched and resized.
- **imageType (string, optional)**: The output image format. Defaults to avif. Supported formats: png, jpg, jpeg, webp, avif, bmp.
- **scale (number, optional)**: A scaling factor for resizing the image. Defaults to 1. Should be greater than 0.

## Example
```jsx 
import React from 'react';
import useImgReducer from "imgreducer";

function ImageComponent() {
  const { src } = useImgReducer('https://example.com/sample.jpg', 'webp', 0.5);
  
  return (
    <div>
      {src ? <img src={src} alt="Reduced Image" /> : 'Loading...'}
    </div>
  );
}

export default ImageComponent;

```
## Features
- Fetches an image from a given URL.
- Resizes the image based on a scale factor.
- Maintains the aspect ratio during scaling.
- Converts the image into a specific format (png, jpg, jpeg, webp, avif, bmp).
- Returns a blob URL of the resized image that can be used as the src for image tags.
