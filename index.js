const chalk=require('chalk')
const yargs=require('yargs')

const notes=require('./notes.js')

// Customize version
yargs.version('1.1.0') 

yargs.command({
   command:'Add',
   describe:'Add a note',
   builder:{
      title:{
         describe:'Note Title'
      },
      body:{
         describe:'Jounre',
         demandOption:true,
         type:'string'
      }
   },
   handler(argsv){
      notes.addNote(argsv.title,argsv.body)
   }
})

yargs.command({
   command:'Remove',
   describe:'Choose to remove an existing node',
   builder:{
      title:{
         describe:'title to be removed'
      }
   },
   handler(argsv){
      notes.removeNote(argsv.title)
   }
})

yargs.command({
   command:'list',
   describe:'Choose if u want to see all of your works',
   handler(){
      notes.listNotes()
   }
})
 
yargs.command({
   command:'read',
   describe:'Choose ot read',
   builder:{
      title:{
         describe:'title to be removed'
      }
   },
   handler(argsv)
   {
      notes.readNotes(argsv.title)
   }
})

yargs.parse()
 


































