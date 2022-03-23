import { saveAs } from 'file-saver';
import mergeImages from 'merge-images';
import React, { useEffect } from 'react';

const FurnitureImage = ({ selectedColors, images, logo }) => {
  let imgSource = [];
  const groupNames = Object.keys(selectedColors);

  //writing a hash to the URL for selected colors
  useEffect(()=>{
    const path = groupNames.map((groupName)=>{
      return groupName+':' + selectedColors[groupName].node.color;
    }).join('|').replace(/\s/g,'_');
    window.location.hash = path;
  },[selectedColors]);

  const downloadImage = () => {
    //creates the filename for the image to be downloaded
    const uri = window.location.pathname.replace(/\//g,'');
    const fileName = uri+'_'+groupNames.map((groupName)=>{
      return groupName+'-' + selectedColors[groupName].node.color;
    }).join('_').replace(/\s/g, '');
    imgSource.push({src:logo, x: 720, y: 20})
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
          <button className='download-button' onClick={downloadImage}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160zM255 295L216 334.1V232c0-13.25-10.75-24-24-24S168 218.8 168 232v102.1L128.1 295C124.3 290.3 118.2 288 112 288S99.72 290.3 95.03 295c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94S264.4 285.7 255 295z"/></svg><span className='visually-hidden'>Download</span></button>
      </div>
    </div>);
}

export default FurnitureImage;