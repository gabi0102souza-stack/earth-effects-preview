const fs=require('node:fs/promises');
(async()=>{
 const cssURL='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:wght@400..800&display=swap';
 const res=await fetch(cssURL,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'}});
 const css=await res.text(); await fs.writeFile('qa-artifacts/font-source.css',css); console.log(css);
})().catch(e=>{console.error(e.message);process.exit(1)});
