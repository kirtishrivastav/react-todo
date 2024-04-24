// understanding node persist 
const express =require('express')
const storage = require('node-persist');
const app=express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// persist function 
async function main() {
    await storage.init();
     
    const key = 'myInput';
    const inputValue = 'This is the input text I want to store.';
    await storage.setItem(key, inputValue);

    const storedValue = await storage.getItem(key);
    console.log("values are stored"); // This will log: 'This is the input text I want to store.'
}

main();
app.listen(8000, ()=>{console.log("server started")});

