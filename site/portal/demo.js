"use strict";
/* PCP academic prototype. No authentication or authorization: roles only change the demo UI.
   Only synthetic records belong here. Browser-local persistence is not a shared database. */
const KEY="pcp-fictional-client-demo-v1";
const stages=["Discovery","Planning","Execution","Validation","Closed"];
const services=["Systems Integration","SDLC Management","Usability Testing","IT Auditing"];
const seed=[
["Northstar Systems","Jordan Lee","Systems Integration","Las Vegas, NV"],
["Crescent Technology","Morgan Brooks","SDLC Management","Toronto, Canada"],
["Meridian Solutions","Taylor Chen","Usability Testing","London, UK"],
["Summit Digital","Avery Ortiz","IT Auditing","Denver, CO"],
["Harborline Labs","Cameron Price","Systems Integration","Sydney, Australia"],
["Redwood Analytics","Riley Morgan","SDLC Management","Seattle, WA"],
["Pinnacle Research","Quinn Harper","IT Auditing","Berlin, Germany"],
["Atlas Creative","Drew Patel","Usability Testing","Austin, TX"],
["Blue Ridge Networks","Casey Nguyen","Systems Integration","Richmond, VA"],
["Lumen Digital","Alexis Taylor","SDLC Management","Vancouver, Canada"],
["Clearwater Data","Sasha Rivera","IT Auditing","Orlando, FL"],
["Orbit UX Studio","Emery Reed","Usability Testing","San Diego, CA"]
].map(([company,contact,service,location],i)=>({
 id:"sample-"+(i+1),company,contact,service,location,
 consultant:["Alex Morgan","Sam Rivera","Jamie Brooks","Taylor Reed"][i%4],
 stage:stages[i%5],note:"",archived:false
}));
const $=id=>document.getElementById(id);
function validRecord(r){
 return r&&typeof r.id==="string"&&typeof r.company==="string"&&typeof r.contact==="string"&&
 typeof r.location==="string"&&services.includes(r.service)&&stages.includes(r.stage)&&
 typeof r.consultant==="string"&&typeof r.note==="string"&&typeof r.archived==="boolean";
}
function load(){
 try{const raw=localStorage.getItem(KEY);if(!raw)return seed.map(r=>({...r}));
 const parsed=JSON.parse(raw);return Array.isArray(parsed)&&parsed.length<=250&&parsed.every(validRecord)?parsed:seed.map(r=>({...r}));
 }catch{return seed.map(r=>({...r}));}
}
let records=load(),selected=null;
const role=$("role"),search=$("search"),filter=$("filter"),results=$("results"),count=$("count");
function persist(){try{localStorage.setItem(KEY,JSON.stringify(records));return true;}catch{feedback("Browser storage unavailable: changes remain in this tab only.");return false;}}
function feedback(message){$("workspace-feedback").textContent=message;}
function el(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function button(text,action,id){const b=el("button",text,"secondary-btn");b.type="button";b.dataset.action=action;b.dataset.id=id;return b;}
function canManage(){return role.value==="office";}
function canWorkflow(){return role.value==="office"||role.value==="consultant";}
function activeCount(){return records.filter(r=>!r.archived).length;}
function updateMetrics(){$("client-total").textContent=activeCount();$("project-total").textContent=records.filter(r=>!r.archived&&r.stage!=="Closed").length;}
function renderList(){
 const term=search.value.trim().toLowerCase(),service=filter.value,showArchived=$("show-archived").checked;
 const found=records.filter(r=>(showArchived||!r.archived)&&(!service||r.service===service)&&[r.company,r.contact,r.service,r.location,r.consultant,r.stage].some(v=>v.toLowerCase().includes(term))).sort((a,b)=>a.company.localeCompare(b.company));
 results.replaceChildren();
 found.forEach(r=>{const article=el("article",undefined,"client client-clickable"),name=el("h3",r.company),meta=el("p","Contact: "+r.contact+" · "+r.location);
 const badge=el("span",r.service+(r.archived?" · Archived":""));const open=button("View details →","view",r.id);open.setAttribute("aria-label","View fictional client "+r.company);
 article.append(name,meta,badge,open);results.append(article);});
 count.textContent=found.length+" fictional client"+(found.length===1?"":"s")+" found";
 if(!found.length)results.append(el("p","No matching demonstration records."));
 updateMetrics();
}
function renderDetails(){
 const r=records.find(x=>x.id===selected);if(!r){$("record-panel").hidden=true;return;}
 $("record-panel").hidden=false;
 const box=$("record-details");box.replaceChildren();
 const title=el("h3",r.company),info=el("dl",undefined,"detail-grid");
 [["Contact",r.contact],["Location",r.location],["Service",r.service],["Assigned consultant",r.consultant||"Unassigned"],["Record status",r.archived?"Archived":"Active"],["Engagement stage",r.stage]].forEach(([k,v])=>{const item=el("div");item.append(el("dt",k),el("dd",v));info.append(item);});
 box.append(title,info);
 const actions=$("record-actions");actions.replaceChildren();
 if(canManage()){actions.append(button("Edit client","edit",r.id),button(r.archived?"Restore client":"Archive client",r.archived?"restore":"archive",r.id));}
 const track=$("stage-track");track.replaceChildren();
 stages.forEach((stage,i)=>{const li=el("li",stage,i<=stages.indexOf(r.stage)?"stage-complete":"");if(stage===r.stage)li.setAttribute("aria-current","step");track.append(li);});
 $("workflow-form").hidden=!canWorkflow()||r.archived;
 $("workflow-stage").value=r.stage;$("workflow-note").value="";
 $("latest-note").textContent=r.note?"Latest demo note: "+r.note:"No workflow notes recorded.";
}
function choose(id){selected=id;$("editor-panel").hidden=true;renderDetails();$("record-panel").scrollIntoView({behavior:"smooth",block:"start"});}
function setRole(){
 const desc={viewer:"Read-only preview: inspect client records.",consultant:"Simulated consultant: view records and update engagement workflow.",office:"Simulated office staff: create, edit, archive, and restore client records."};
 $("role-explanation").textContent=desc[role.value]+" Role selection is not a security control.";
 $("new-client").hidden=!canManage();
 $("editor-panel").hidden=true;
 renderList();renderDetails();
}
function showEditor(r){
 if(!canManage())return;
 $("editor-title").textContent=r?"Edit fictional client":"Add fictional client";
 $("client-id").value=r?r.id:"";$("client-company").value=r?r.company:"";$("client-contact").value=r?r.contact:"";$("client-location").value=r?r.location:"";
 $("client-service").value=r?r.service:services[0];$("client-consultant").value=r?r.consultant:"";$("client-stage").value=r?r.stage:stages[0];
 $("editor-panel").hidden=false;$("editor-panel").scrollIntoView({behavior:"smooth",block:"start"});$("client-company").focus();
}
function saveClient(event){
 event.preventDefault();if(!canManage())return;
 const id=$("client-id").value,fields={company:$("client-company").value.trim(),contact:$("client-contact").value.trim(),location:$("client-location").value.trim(),service:$("client-service").value,consultant:$("client-consultant").value.trim(),stage:$("client-stage").value};
 if(!fields.company||!fields.contact||!fields.location||!services.includes(fields.service)||!stages.includes(fields.stage)){feedback("Please complete the required fields.");return;}
 let r;
 if(id){r=records.find(x=>x.id===id);if(!r)return;Object.assign(r,fields);}
 else {r={id:"demo-"+Date.now()+"-"+Math.floor(Math.random()*10000),...fields,note:"",archived:false};records.push(r);}
 persist();$("editor-panel").hidden=true;renderList();choose(r.id);feedback("Fictional client record saved in this browser.");
}
results.addEventListener("click",event=>{const b=event.target.closest("button[data-action='view']");if(b)choose(b.dataset.id);});
$("record-actions").addEventListener("click",event=>{
 const b=event.target.closest("button[data-action]");if(!b||!canManage())return;
 const r=records.find(x=>x.id===b.dataset.id);if(!r)return;
 if(b.dataset.action==="edit")showEditor(r);
 if(b.dataset.action==="archive"&&window.confirm("Archive this fictional client record?")){r.archived=true;persist();renderList();renderDetails();feedback("Demo record archived.");}
 if(b.dataset.action==="restore"){r.archived=false;persist();renderList();renderDetails();feedback("Demo record restored.");}
});
$("workflow-form").addEventListener("submit",event=>{
 event.preventDefault();const r=records.find(x=>x.id===selected);if(!r||r.archived||!canWorkflow())return;
 const stage=$("workflow-stage").value;if(!stages.includes(stage))return;
 r.stage=stage;r.note=$("workflow-note").value.trim().slice(0,300);persist();renderList();renderDetails();feedback("Fictional engagement status updated locally.");
});
$("client-form").addEventListener("submit",saveClient);
$("new-client").addEventListener("click",()=>showEditor(null));
$("cancel-edit").addEventListener("click",()=>{$("editor-panel").hidden=true;});
$("close-record").addEventListener("click",()=>{selected=null;$("record-panel").hidden=true;});
$("reset-demo").addEventListener("click",()=>{if(!window.confirm("Reset all locally saved fictional records to the initial demo data?"))return;records=seed.map(r=>({...r}));persist();selected=null;$("record-panel").hidden=true;$("editor-panel").hidden=true;search.value="";filter.value="";$("show-archived").checked=false;renderList();feedback("Demonstration records reset.");});
role.addEventListener("change",setRole);search.addEventListener("input",renderList);filter.addEventListener("change",renderList);$("show-archived").addEventListener("change",renderList);
setRole();
