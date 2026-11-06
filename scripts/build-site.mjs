#!/usr/bin/env node
// PCP static site renderer; no npm dependencies required.
import {readFile,writeFile,readdir,mkdir} from "node:fs/promises";
import path from "node:path";
const base=path.resolve("src/pages"),dest=path.resolve("site"),parts=path.resolve("src/partials"),cache=new Map();
async function include(key){
 if(!/^(header|footer)-(public|docs|portal|workspace)$/.test(key))throw Error("Unsupported include "+key);
 if(!cache.has(key))cache.set(key,(await readFile(path.join(parts,key+".html"),"utf8")).trimEnd());
 return cache.get(key);
}
async function render(dir,rel=""){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const sub=path.join(rel,entry.name);
  if(entry.isDirectory()){await render(path.join(dir,entry.name),sub);continue;}
  if(!entry.isFile()||!entry.name.endsWith(".html"))continue;
  const src=await readFile(path.join(dir,entry.name),"utf8");
  let result="",at=0;
  for(const m of src.matchAll(/<!--#include ([a-z-]+)-->/g)){
   result+=src.slice(at,m.index)+await include(m[1]);at=m.index+m[0].length;
  }
  result+=src.slice(at);
  if(result.includes("<!--#include"))throw Error("Unresolved include in "+sub);
  const target=path.join(dest,sub);await mkdir(path.dirname(target),{recursive:true});await writeFile(target,result,"utf8");
 }
}
await render(base);
console.log("PCP static pages generated.");
