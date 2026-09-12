import os from 'os'

export function osModulesFunction(){
    console.log(os.platform());
    console.log(os.arch());
    console.log(os.cpus());
    
}