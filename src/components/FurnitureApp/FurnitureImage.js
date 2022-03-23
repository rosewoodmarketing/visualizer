import { saveAs } from 'file-saver';
import mergeImages from 'merge-images';
import React from 'react';

const FurnitureImage = ({ selectedColors, images, logo }) => {
  let imgSource = [];
  const groupNames = Object.keys(selectedColors);

  const downloadImage = () => {

    //creates the filename for the image to be downloaded
    const fileName = groupNames.map((groupName)=>{
      return groupName+'-' + selectedColors[groupName].node.color;
    }).join('-').replace(/\s/g, '');
    
    imgSource.push({src:logo, opacity: 0.5, x: 570, y: 30})

    mergeImages(imgSource).then((img) => downloadBase64Data(img, `${fileName}.png`));
  };

  const downloadBase64Data = (base64String, fileName) => {
    let file = convertBase64ToFile(base64String, fileName);
    saveAs(file, fileName);
  };

  const convertBase64ToFile = (base64String, fileName) => {
    let arr = base64String.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
      uint8Array[n] = bstr.charCodeAt(n);
    }

    return new File([uint8Array], fileName, { type: mime });
  };

  return (
    <div className="large-image-wrapper">
      <div>
        {
          // loop through the groupNames (the selected colors from state) so that we can have separate layers for the furniture image.
          groupNames.map(groupName => {

            const { node } = selectedColors[groupName];
            const alt = node.group + ' swatch for ' + node.color;

            // Split off the file extension from the spreadsheet data.
            let imageName = node.image;
            if (imageName.includes('.')) {
              imageName = imageName.split('.')[0];
            }
            // Going through the images to find the image where the name matches the data from the spreadsheet. Set the result = imageFile
            const imageFile = images.find(im => im.node.name === imageName);
            if (!imageFile) {
              return null;
            }

            const src = imageFile.node.childImageSharp.resize.src;
            imgSource.push(src);

            return <img className="layers"
                        src={src}
                        key={groupName}
                        alt={alt}
            />;
          })}
      </div>
      <button onClick={downloadImage}>Download</button>
    </div>);
}

export default FurnitureImage;