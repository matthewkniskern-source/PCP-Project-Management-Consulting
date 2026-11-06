"use strict";
// Fictional sample records only. Never replace with confidential or real client data.
const samples=[
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
].map(([company,contact,service,location])=>({company,contact,service,location}));
const search=document.getElementById("search"),filter=document.getElementById("filter"),results=document.getElementById("results"),count=document.getElementById("count");
function render(){const term=search.value.trim().toLowerCase(),service=filter.value;const matches=samples.filter(r=>(!service||r.service===service)&&Object.values(r).some(v=>v.toLowerCase().includes(term)));results.replaceChildren();for(const r of matches){const article=document.createElement("article");article.className="client";const h=document.createElement("h3");h.textContent=r.company;const p=document.createElement("p");p.textContent="Contact: "+r.contact+" · "+r.location;const badge=document.createElement("span");badge.textContent=r.service;article.append(h,p,badge);results.append(article)}count.textContent=matches.length+" fictional client"+(matches.length===1?"":"s")+" found";if(!matches.length){const p=document.createElement("p");p.textContent="No matching demo records.";results.append(p)}}
search.addEventListener("input",render);filter.addEventListener("change",render);render();