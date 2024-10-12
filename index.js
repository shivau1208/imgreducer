import React, { useState,useEffect } from 'react';

export default function useImgReducer(url,imageType='avif',scale = 1) {
  const [src,setSrc] = useState(null)
  useEffect(()=>{
    if(scale <= 0 || !url) return;
    const fetchImage = async ()=>{
      // Fetch the image as a blob
      const response = await fetch(url);
      const blob = await response.blob();
  
      // Create an image element
      const image = new Image();
      image.src = URL.createObjectURL(blob);
      
      image.onload = () => {
        let originalWidth = image.width;
        let originalHeight = image.height;
        
        
        // Calculate new dimensions maintaining the aspect ratio
        const aspectRatio = originalWidth / originalHeight;
        const newWidth = originalWidth * scale;
        const newHeight = newWidth / aspectRatio;
        const canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext('2d');
        
        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        if(['png','jpg','jpeg','webp','avif','bmp'].includes(imageType)){
          canvas.toBlob(function(imgBlob) {
            const webpUrl = URL.createObjectURL(imgBlob);
            setSrc(webpUrl);
      
          }, `image/${imageType}`);
          // Convert the canvas content to WebP
        }else{
          throw new Error(`${imageType} is not supported.`);
        }
      };
    }
    fetchImage();
    return ()=>setSrc(null);
  },[url,imageType,scale])
  return { src }
}
