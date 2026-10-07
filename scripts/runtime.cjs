const fs=require('node:fs');
exports.dependency=name=>{try{return require(name)}catch{return require('C:/Users/Gabriel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/'+name)}};
exports.launchOptions=()=>{const candidates=[process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].filter(Boolean);const executablePath=candidates.find(p=>fs.existsSync(p));return{headless:true,...(executablePath?{executablePath}:{})}};
