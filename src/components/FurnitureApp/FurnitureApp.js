import React, { useState, useEffect } from "react"
import FurnitureImage from './FurnitureImage'
import Swatch from "./swatch"

const FurnitureApp = ({data, images, swatches}) => {
    // Sets the selected color
    const [selectedColors, setColor] = useState({}); // - react state with hooks
    // Formats the data into grouped colors
    const [groupedColors, setGroupedColors] = useState(null); // - react state with hooks
    const [openGroup, setOpenGroup] = useState('');
    
    // useEffect: ensures that grouped colors are up to date depending on the data passed in. Only recalculates if data changes. Here our logic reformats our flat array into groups and subgroups.
    useEffect(()=>{
      let openGroupSet = false;
      
      data.forEach(color => {
        const {node:{group}} = color;
        
        // For the accordion functionality
        if(!openGroup && !openGroupSet){
          openGroupSet=true;
          setOpenGroup(group);
        }

      });

    }, [data, openGroup]);

    useEffect(()=>{

      let groupedColors = {
        /*
        "Main Color": {
            "Wood Grain": [ {}, {}],
            "Solid Color": []
        },
        "": {
          "": []
        }
        */
      };

      let defaults = {};
      data.forEach(color => {
        const {node:{group, subgroup}} = color;

        if(!groupedColors[group]) {
          // first color of a group
          defaults[group] = color;
          groupedColors[group] = {};
        }
        if(!groupedColors[group][subgroup]){
          groupedColors[group][subgroup] = [];
        }
  
        groupedColors[group][subgroup].push(color);
      });
      // stores the groups of colors in the state
      setGroupedColors(groupedColors);


      // set default selected color of each group
      setColor(defaults);

    },[data])


    // Waiting for the data. This could trigger a spinner or message.
    if(!groupedColors){
      return null;
    }

    // Return a template, written in JSX
    return (
        // Calls the FurnitureImage component
        <div className="FurnitureApp">
          
            <FurnitureImage selectedColors={selectedColors} images={images} />
            <div className="swatch-panel">
              <div>
              { 
              // loop through groups and map the group name to the grouping title
              Object.entries(groupedColors).map( ([group, subgroups], index)=>{
                // group may be  = "Main Color"
                // subgroups may be = { "Wood Grain": []}
                const subgroupsArray = Object.entries(subgroups);

                return (
                  <div key={group} className={"group-wrapper accordion " + (openGroup===group ? 'open' : 'closed')}>
                    <button className="group-title" onClick={e=>{setOpenGroup(group)}}><h2>{group}</h2></button>
                    <div className="group-content">
                      {
                      // loop through subgroups to map the subgroup name to subgrouping title
                      subgroupsArray.map( ([subgroup, colors])=>{
                        // This function is used to allow us to arrow right and left.
                        const setNextActive = (dir=1) => {
                          // find the index of the active item  and use it. Looping through all the colors until it matches the selectedColor in state.
                          const index = colors.findIndex(color => color.node.color === ( selectedColors[group] && selectedColors[group].node.color) )

                          const nextColor =  colors[index+dir];
                          
                          // If we found a nextColor, set the selected color to nextColor for the current group.
                          if(nextColor){
                            setColor(state => {
                              return {...state,
                                  [group]: nextColor
                              }
                            })
                          }
                        }

                        // subgroup may be = "Wood Grain"
                        // colors = array of color objects used for the repeating tiles.
                        return (
                          <div className="subgroup-wrapper" key={subgroup}>
                            <h3 className="subgroup-title">{subgroup}</h3>
                            <div className="subgroup-content">
                            {
                              // loop through the colors of subgroup to populate the swatch tiles
                              colors.map((d,i)=>{
                                
                                let swatchColor = d.node.colorValue;
                                // If value does not begin with #, it is considered an image.
                                const isSwatchImage = swatchColor && swatchColor[0]!=='#';
                                let swatchImage;
                                if(isSwatchImage && swatches){
                                  // Splitting into two values on the .
                                  swatchColor = swatchColor.split('.');
                                  // If more than one value in the array, pop off the second value.
                                  if(swatchColor.length>0){
                                    swatchColor.pop();
                                  }
                                  // Only the filename remains. Convert the array back into a string.
                                  swatchColor = swatchColor.join('.');
                                  // swatchImage is gotten from spreadsheet. swatches from allFiles. Here we compare the two values to match them
                                  swatchImage = swatches.find(im => im.node.name===swatchColor);
                                }

                                // As we loop through colors, when the current color  matches what is in state, we know it is the active color, stored as a variable.
                                const isActive = selectedColors[group] && selectedColors[group].node.color === d.node.color;

                                // A function that allows us to set the current item as active. We call it with onClick in the swatch component.
                                const setActive = (e)=>{
                                  setColor(state => {
                                    return {...state,
                                        [group]: d
                                    }
                                  })
                                };

                                return (
                                <Swatch 
                                  key={i}
                                  color={d.node.color} 
                                  active={isActive}
                                  colorValue={swatchColor}
                                  swatchImage={swatchImage}
                                  alt={d.node.group + ' swatch for ' + d.node.color}
                                  setActive={setActive}
                                  setNextActive={setNextActive}
                                />
                              )})
                            }
                
                            </div>
                          </div>
                        )

                      })}


                    </div>
                  </div>
                )
                

              })}

    </div>
    </div>
    </div>
    )
}

export default FurnitureApp;