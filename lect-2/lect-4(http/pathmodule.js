import path from 'path';
import fs from 'fs'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const pathUrl = path.join(__dirname,"myfiles")

fs.writeFileSync(pathUrl+"/test.txt","hello world");

console.log("file writing operation");
console.log(pathUrl);
