import React from "react"

const FurnitureImage = ({selectedColors, images}) => {

    const groupNames = Object.keys(selectedColors);
    
    return (
        <div className="large-image-wrapper"> 
          <div>
            {
            // loop through the groupNames (the selected colors from state) so that we can have separate layers for the furniture image.
            groupNames.map(groupName =>{
                const { node } =  selectedColors[groupName];
                const alt = node.group + ' swatch for ' + node.color;

                // Split off the file extension from the spreadsheet data. 
                let imageName = node.image;
                if(imageName.includes('.')){
                    imageName = imageName.split('.')[0];
                }
                // Going through the images to find the image where the name matches the data from the spreadsheet. Set the result = imageFile
                const imageFile = images.find(im => im.node.name===imageName);
                if(!imageFile){
                    return null;
                }

                const src = imageFile.node.childImageSharp.resize.src;

                
                return (
                    <img className="layers"
                        src={src}
                        key={groupName}
                        alt={alt} 
                    />
                )
            })}
          </div>
        </div>
    )
}

export default FurnitureImage;