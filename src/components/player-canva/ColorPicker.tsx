import { SketchPicker } from 'react-color'

const swatch = {
  padding: '5px',
  background: '#fff',
  borderRadius: '1px',
  boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
  display: 'inline-block',
  cursor: 'pointer',  
}

const ColorPickerControl = (props:any) => {
  const {color, handleChange, displayColorPicker, handleClick} = props;
  if(displayColorPicker) {
    return (
      <div style={{
        position: 'absolute',
        zIndex: 2,  
      }}>
        <div style={ {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          } } onClick={ handleClick }/>
        <SketchPicker color={ color } onChange={ handleChange } />
      </div>
    )
  }
  
  return null;
}

const ColorPicker = (props: any) => {
  const {color, handleColorChange, displayColorPicker, setDisplayColorPicker} = props;
  
  const handleClick = () => {    
    setDisplayColorPicker(!displayColorPicker);
  }    

  const handleChange = (event: any) => {
    const {selectedColor} = event;
    // handleColorChange(selectedColor.hex);
    handleColorChange(selectedColor.hex)
  }

  return (
    <div >
      <div style={swatch} onClick={handleClick}>
        <div style={ {
          backgroundColor: color,
          width: '36px',
          height: '14px',
          borderRadius: '2px'
        } } />
      </div>
      <ColorPickerControl 
        color={color} 
        handleChange={handleChange} 
        displayColorPicker={displayColorPicker} 
        handleClick={handleClick}/>
    </div>
  )
}

export default ColorPicker;