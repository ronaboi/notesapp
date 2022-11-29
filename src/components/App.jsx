import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea"
function App(){
    const [notes,addNotes]=useState([])
    function addNote(newInput){
        addNotes((prevNote)=>{
            return[...prevNote,newInput]
        })
    }
    function deleteNote(id){
        addNotes((prevNote)=>{
            return prevNote.filter((item,index)=>{
            return index!==id;
        })
        })
    }
    return(
    <div>
    <Header/>
    <CreateArea note={addNote}/>
    {notes.map((item,index)=>{
        return <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>})}
    <Footer/>
    </div>
    );
}

export default App;