import readline from 'readline'

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter yor name",(name)=>{
      console.log(name);
      r1.close();
      
})