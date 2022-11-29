import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [newInput,changeInput]=useState({
    title:"",
    content:""
  })
  function noteChange(e){
    const {name,value}=e.target;
    changeInput((prevValue)=>{
    return{
    ...prevValue,
    [name]:value
    }
  }
  )}
  function submitNote(e){
    props.note(newInput)
    e.preventDefault();
    changeInput({
      title:"",
      content:""
    })
  }  
  const[row,changeRow]=useState(false)
  function Change(){
    changeRow(true)
  }

  return (
    <div>
      <form className="create-note">
        {row&&<input onChange={noteChange} name="title" placeholder="Title" value={newInput.title}/>}
        <textarea onClick={Change} onChange={noteChange} name="content" placeholder="Take a note..." rows={row?3:1} value={newInput.content}/>
        {row&&<Zoom in={true}>
        <Fab onClick={submitNote}> <AddIcon/> </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
