const sharp=require('./runtime.cjs').dependency('sharp');
(async()=>{ for(const width of [640,1280]){await sharp('qa-artifacts/region-original.jpg').rotate().resize(width,Math.round(width*.75),{fit:'cover',position:'centre'}).webp({quality:82}).toFile(`assets/region-${width}.webp`)} })().catch(e=>{console.error(e);process.exit(1)});

