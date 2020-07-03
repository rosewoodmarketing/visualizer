import React from "react"

const Swatch = ({ active, setActive, setNextActive, colorValue, color, swatchImage, alt }) =>(
    <button
        className={ active ? 'swatch active' : 'swatch' }
        type="button"
        onClick={setActive}
        onFocus={setActive}
        onKeyUp={e=>{
            // 39 - right
            // 37 - left
            if(e.which===39){
                setNextActive();
            } else if (e.which===37){
                setNextActive(-1);
            }
        }}
    >
        {/* If swatchImage, render <img />, otherwise render div.   */}
        <div className="swatch-color">{swatchImage ? (
            <img src={swatchImage.node.childImageSharp.resize.src} alt={alt} loading="lazy" height="40" width="40" />
                    ):(
            <div style={{backgroundColor:colorValue}}></div>
            )}
        </div>
        <div className="swatch-name">{color}</div>
    </button>
)

export default Swatch