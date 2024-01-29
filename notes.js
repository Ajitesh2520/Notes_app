const chalk=require('chalk')
const fs=require('fs')
const getNotes=() =>
{
    console.log('here is where my notes rest')
}
 //                        ******     section responsible for Adding a note     ******

const addNote=(title,body)=>
{
    const notes=loadNotes()
    // const duplicateNotes=notes.filter(function(note){
    //     return note.title===title
    // })
    const duplicateNotes=notes.filter((note)=>note.title===title)
    if(duplicateNotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New note added!')
    }
    else{
        console.log("Note title already in use :( ")
    }
    
} 
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}


const loadNotes=()=>{
    
try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e)
{
    return []
}
}


//                                   ******   section to remove an existing note   ******
const removeNote=(title)=>{
const notes=loadNotes()
const notesToKeep=notes.filter((note) =>note.title!=title)
const size1=notes.length
const size2=notesToKeep.length
if(size1!=size2)
console.log(chalk.green.inverse('Note removed successfully !!'))
else{
    console.log(chalk.red.inverse("No note fouund !!"))
}
saveNotes(notesToKeep)


}

//                        ******  Section for Listing All Available Notes    ******

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.green("Here are your Notes !!"))
    notes.forEach((element)=>{
        console.log(element.title)
    })

}

//                        ******  Section for Reading a given Note    ******
const readNotes=(title)=>{
    const notes=loadNotes()
    const required_note=notes.find((notes)=>notes.title===title)
    if(required_note)
    console.log(required_note.body)
    else
    console.log(chalk.red('No Note Found :('))
}

module.exports={
    getNotes: getNotes,
    addNote:  addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}

const event={
    name:'Birthday Party',
    guestList:['Andrew','Jen','Mike'],
    printGuestList(){
        console.log('Guest List for '+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending '+ this.name)
        })
    }

}