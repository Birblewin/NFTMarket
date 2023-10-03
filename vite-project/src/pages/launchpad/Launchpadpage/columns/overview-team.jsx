import Columnlayout from './Columnlayout'
import './style.css'

const Notes = () => {
  return (
    <div className="App">
      
    
  
    <div className='Details'>
    <Columnlayout>
    <div className='Column-container'>
      <div className="column">
        <p>This is the left column.</p>
        <p>It can contain paragraphs or other content.</p>
      </div>
      <div className="column">
        <p>This is the right column.</p>
        <p>It can also contain paragraphs or other content.</p>
      </div>
     </div>
    </Columnlayout>
    </div>
  </div>
  )
}

export default Notes
