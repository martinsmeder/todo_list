(()=>{"use strict";const e=(e,t,n,a,c)=>({title:e,description:t,priority:n,dueDate:a,isDone:c}),t=(()=>{const t=[],n=()=>{localStorage.setItem("itemArray",JSON.stringify(t))};return(()=>{const e=JSON.parse(localStorage.getItem("itemArray"));e&&Array.isArray(e)&&(t.length=0,t.push(...e))})(),{itemArray:t,createItem:(a,c,o,r,i)=>{const l=e(a,c,o,r,i);return t.push(l),n(),l},deleteItem:e=>{const a=t.indexOf(e);a>-1&&(t.splice(a,1),n())},editItem:async(e,t,a,c,o,r)=>{e.title=t,e.description=a,e.priority=c,e.dueDate=new Date(o),e.isDone=r,n()},toggleIsDone:e=>{e.isDone=!e.isDone,n()},getAllItems:()=>t}})(),n=(()=>{const t=[],a=()=>{localStorage.setItem("projectArray",JSON.stringify(t))};return(()=>{const e=JSON.parse(localStorage.getItem("projectArray"));e&&Array.isArray(e)&&(t.length=0,t.push(...e))})(),{projectArray:t,createProject:e=>{const n=((e,t=[])=>({title:e,array:t}))(e,[]);return t.push(n),a(),n},deleteProject:e=>{const n=t.indexOf(e);n>-1&&(e.array.length=0,t.splice(n,1),a())},editProject:(e,t)=>{e.title=t,a()},addProjectItem:(t,n,c,o,r,i)=>{const l=e(n,c,o,r,i);return t.array.push(l),a(),l},deleteProjectItem:(e,t)=>{const n=e.array.indexOf(t);n>-1&&(e.array.splice(n,1),a())},editProjectItem:async(e,t,n,c,o,r,i)=>{t.title=n,t.description=c,t.priority=o,t.dueDate=new Date(r),t.isDone=i,a()},toggleIsDone:e=>{e.isDone=!e.isDone,a()},getAllProjects:()=>t,getProjectByTitle:e=>n.getAllProjects().find((t=>t.title===e))}})(),a=(()=>{const e=e=>{const t=new Date;t.setHours(0,0,0,0);const n=new Date(e);return n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()},a=e=>{const t=new Date;t.setHours(0,0,0,0);const n=new Date(Date.parse(e)),a=new Date(t.getFullYear(),t.getMonth(),t.getDate()+(7-t.getDay()));return n>=t&&n<=a};return{isDueToday:e,isDueThisWeek:a,getAllDailyItems:()=>{const a=[];return t.itemArray.forEach((t=>{e(t.dueDate)&&a.push(t)})),n.projectArray.forEach((t=>{t.array.forEach((t=>{e(t.dueDate)&&a.push(t)}))})),a},getAllWeeklyItems:()=>{const e=[];return t.itemArray.forEach((t=>{a(t.dueDate)&&e.push(t)})),n.projectArray.forEach((t=>{t.array.forEach((t=>{a(t.dueDate)&&e.push(t)}))})),e},getAllTotalItems:()=>{const e=[...t.itemArray];return n.projectArray.forEach((t=>{e.push(...t.array)})),e}}})();async function c(e){if(!t.itemArray.includes(e))return document.createComment("Item not in itemArray");const n=document.createElement("div");n.classList.add("card");const a=document.createElement("div");a.classList.add("left");const o=document.createElement("div");o.classList.add("right");const r=document.createElement("div");r.classList.add("priority"),"low"===e.priority?r.classList.add("low"):"medium"===e.priority?r.classList.add("medium"):"high"===e.priority&&r.classList.add("high");const l=document.createElement("input");l.classList.add("left"),l.type="checkbox",l.checked=e.isDone,l.addEventListener("click",(async()=>{await t.toggleIsDone(e)}));const d=document.createElement("p");d.textContent=e.title;const s=document.createElement("p"),m={day:"numeric",month:"short",year:"2-digit"};if("string"==typeof e.dueDate){const t=new Date(e.dueDate);s.textContent=t.toLocaleDateString("en-US",m)}else s.textContent=e.dueDate.toLocaleDateString("en-US",m);const u=document.createElement("img");u.src="images/edit.png",u.addEventListener("click",(()=>{const a=function(e,n){if(!t.itemArray.includes(e))return document.createComment("Item not in itemArray");const a=document.createElement("form");a.classList.add("form");const o=document.createElement("input");o.type="text",o.name="title",o.value=e.title;const r=document.createElement("textarea");r.name="description",r.value=e.description;const l=document.createElement("select");l.name="priority";const d=document.createElement("option");d.value="low",d.text="Low Priority",l.appendChild(d);const s=document.createElement("option");s.value="medium",s.text="Medium Priority",l.appendChild(s);const m=document.createElement("option");m.value="high",m.text="High Priority",l.appendChild(m),l.value=e.priority;const u=document.createElement("input");u.type="date",u.name="dueDate";const p=e.dueDate instanceof Date?e.dueDate:new Date(e.dueDate);u.value=p.toISOString().slice(0,10);const y=document.createElement("input");y.type="checkbox",y.name="isDone",y.checked=e.isDone;const h=document.createElement("label");h.textContent="Completed",h.appendChild(y);const g=document.createElement("button");return g.type="submit",g.textContent="Update Item",a.appendChild(o),a.appendChild(r),a.appendChild(l),a.appendChild(u),a.appendChild(h),a.appendChild(g),a.addEventListener("submit",(async o=>{o.preventDefault();const r=o.target.elements.title.value,l=o.target.elements.description.value,d=o.target.elements.priority.value,s=new Date(o.target.elements.dueDate.value);s.setHours(0,0,0,0);const m=o.target.elements.isDone.checked;await t.editItem(e,r,l,d,s,m),n.replaceWith(await c(e)),o.target.reset(),a.style.display="none",await i()})),a}(e,n);n.replaceWith(a)}));const p=document.createElement("img");return p.src="images/delete.png",p.addEventListener("click",(async a=>{a.preventDefault(),await t.deleteItem(e),n.remove()})),a.appendChild(r),a.appendChild(l),a.appendChild(d),n.appendChild(a),o.appendChild(s),o.appendChild(u),o.appendChild(p),n.appendChild(o),n}async function o(e){const t=document.createElement("div");t.classList.add("card");const a=document.createElement("div");a.classList.add("left");const c=document.createElement("div");c.classList.add("right");const r=document.createElement("p");r.textContent=e.title;const l=document.createElement("div");l.classList.add("priority"),"low"===e.priority?l.classList.add("low"):"medium"===e.priority?l.classList.add("medium"):"high"===e.priority&&l.classList.add("high");const d=document.createElement("input");d.classList.add("left"),d.type="checkbox",d.checked=e.isDone,d.addEventListener("click",(async()=>{await n.toggleIsDone(e)}));const s=document.createElement("p"),m={day:"numeric",month:"short",year:"2-digit"};if(e.dueDate)if("string"==typeof e.dueDate){const t=new Date(e.dueDate);s.textContent=t.toLocaleDateString("en-US",m)}else s.textContent=e.dueDate.toLocaleDateString("en-US",m);const u=document.createElement("img");u.src="images/edit.png",u.addEventListener("click",(()=>{const a=function(e,t,a){const c=document.createElement("form");c.classList.add("form");const r=document.createElement("input");r.type="text",r.name="title",r.value=t.title;const l=document.createElement("textarea");l.name="description",l.value=t.description;const d=document.createElement("select");d.name="priority";const s=document.createElement("option");s.value="low",s.text="Low Priority",d.appendChild(s);const m=document.createElement("option");m.value="medium",m.text="Medium Priority",d.appendChild(m);const u=document.createElement("option");u.value="high",u.text="High Priority",d.appendChild(u),d.value=t.priority;const p=document.createElement("input");p.type="date",p.name="dueDate";const y=new Date(t.dueDate).toISOString().split("T")[0];p.value=y;const h=document.createElement("input");h.type="checkbox",h.name="isDone",h.checked=t.isDone;const g=document.createElement("label");g.textContent="Completed",g.appendChild(h);const E=document.createElement("button");return E.type="submit",E.textContent="Update Item",c.appendChild(r),c.appendChild(l),c.appendChild(d),c.appendChild(p),c.appendChild(g),c.appendChild(E),c.addEventListener("submit",(async r=>{r.preventDefault();const l=r.target.elements.title.value,d=r.target.elements.description.value,s=r.target.elements.priority.value,m=new Date(r.target.elements.dueDate.value);m.setHours(0,0,0,0);const u=r.target.elements.isDone.checked;await n.editProjectItem(e,t,l,d,s,m,u),a.replaceWith(await o(t)),r.target.reset(),c.style.display="none",await i()})),c}(n.getAllProjects().find((t=>t.array.some((t=>t===e)))),e,t);t.replaceWith(a)}));const p=document.createElement("img");return p.src="images/delete.png",p.addEventListener("click",(async a=>{a.preventDefault();const c=n.getAllProjects().find((t=>t.array.some((t=>t===e))));c&&(await n.deleteProjectItem(c,e),t.remove())})),a.appendChild(l),a.appendChild(d),a.appendChild(r),t.appendChild(a),c.appendChild(s),c.appendChild(u),c.appendChild(p),t.appendChild(c),t}async function r(e){const t=document.createElement("div");t.classList.add("card");const a=document.createElement("div");a.classList.add("left");const c=document.createElement("div");c.classList.add("right");const o=document.createElement("a");o.href="#",o.textContent=e.title,o.addEventListener("click",(async()=>{document.querySelectorAll("#allItems a").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll("#projectContainer > .card").forEach((e=>{e.classList.remove("active")})),t.classList.add("active"),await d(e)}));const s=document.createElement("img");s.src="images/edit.png",s.addEventListener("click",(()=>{const a=function(e,t){const a=document.createElement("form");a.classList.add("form");const c=document.createElement("input");c.type="text",c.name="title",c.value=e.title;const o=document.createElement("button");return o.type="submit",o.textContent="Update Project",a.appendChild(c),a.appendChild(o),a.addEventListener("submit",(async c=>{c.preventDefault();const o=c.target.elements.title.value;await n.editProject(e,o),t.replaceWith(await r(e)),c.target.reset(),a.style.display="none",await l()})),a}(e,t);t.replaceWith(a)}));const m=document.createElement("img");return m.src="images/delete.png",m.addEventListener("click",(async a=>{a.preventDefault(),await n.deleteProject(e),t.remove(),await i()})),a.appendChild(o),c.appendChild(s),c.appendChild(m),t.appendChild(a),t.appendChild(c),t}async function i(){const e=document.querySelector("#content");e.textContent="",document.querySelectorAll(".card").forEach((e=>{e.classList.remove("active")})),document.querySelector("#allItems a:first-child").classList.add("active");const t=await a.getAllTotalItems(),r=await n.getAllProjects();return t.forEach((async t=>{const n=await c(t);e.appendChild(n)})),r.forEach((async t=>{t.array.forEach((async t=>{const n=await o(t);e.appendChild(n)}))})),e}async function l(){const e=document.querySelector("#projectContainer");return e.textContent="",(await n.getAllProjects()).forEach((async t=>{const n=await r(t);e.appendChild(n)})),e}async function d(e){const t=document.querySelector("#content");return t.textContent="",e.array.forEach((async e=>{const n=await o(e);t.appendChild(n)})),t}console.log("This seem to be working..."),async function(e){i(),l();const r=document.querySelectorAll("#allItems a");r.forEach((e=>{e.addEventListener("click",(e=>{r.forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active"),document.querySelectorAll(".card").forEach((e=>{e.classList.remove("active")}))}))})),document.querySelector("#allItems a:first-child").addEventListener("click",(async()=>{await i()})),document.querySelector("#allItems a:nth-child(2)").addEventListener("click",(async()=>{await async function(){const e=document.querySelector("#content");return e.textContent="",(await a.getAllDailyItems()).forEach((async t=>{const n=await c(t);e.appendChild(n)})),e}(),await async function(){const e=document.querySelector("#content");return e.textContent="",(await a.getAllDailyItems()).forEach((async t=>{const n=await o(t);e.appendChild(n)})),e}()})),document.querySelector("#allItems a:nth-child(3)").addEventListener("click",(async()=>{await async function(){const e=document.querySelector("#content");return e.textContent="",(await a.getAllWeeklyItems()).forEach((async t=>{const n=await c(t);e.appendChild(n)})),e}(),await async function(){const e=document.querySelector("#content");return e.textContent="",(await await a.getAllWeeklyItems()).forEach((async t=>{const n=await o(t);e.appendChild(n)})),e}()})),document.querySelector("#newTaskBtn").addEventListener("click",(()=>{!function(){const e=document.querySelector("#content"),a=document.createElement("form");a.classList.add("form");const c=document.createElement("input");c.type="text",c.name="title",c.placeholder="Title",c.required=!0;const o=document.createElement("textarea");o.name="description",o.placeholder="Description";const r=document.createElement("select");r.name="project",n.getAllProjects().forEach((e=>{const t=document.createElement("option");t.value=e.title,t.text=e.title,r.appendChild(t)}));const l=document.createElement("option");l.value="noProject",l.text="No Project",r.appendChild(l);const s=document.createElement("select");s.name="priority";const m=document.createElement("option");m.value="low",m.text="Low Priority",s.appendChild(m);const u=document.createElement("option");u.value="medium",u.text="Medium Priority",s.appendChild(u);const p=document.createElement("option");p.value="high",p.text="High Priority",s.appendChild(p);const y=document.createElement("input");y.type="date",y.name="dueDate",y.required=!0;const h=document.createElement("input");h.type="checkbox",h.name="isDone";const g=document.createElement("label");g.textContent="Completed",g.appendChild(h);const E=document.createElement("button");E.type="submit",E.textContent="Create Item",a.appendChild(c),a.appendChild(o),a.appendChild(r),a.appendChild(s),a.appendChild(y),a.appendChild(g),a.appendChild(E),a.addEventListener("submit",(async e=>{e.preventDefault();const c=e.target.elements.project.value,o=n.getProjectByTitle(c),r=e.target.elements.title.value,l=e.target.elements.description.value,s=e.target.elements.priority.value,m=new Date(e.target.elements.dueDate.value);m.setHours(0,0,0,0);const u=e.target.elements.isDone.checked;"noProject"===c?(await t.createItem(r,l,s,m,u),e.target.reset(),a.style.display="none",await i()):o&&(await n.addProjectItem(o,r,l,s,m,u),e.target.reset(),a.style.display="none",await d(o))})),e.appendChild(a)}()})),document.querySelector("#newProjectBtn").addEventListener("click",(()=>{!function(){const e=document.querySelector("#content"),t=document.createElement("form");t.classList.add("form");const a=document.createElement("input");a.type="text",a.name="title",a.placeholder="Title",a.required=!0;const c=document.createElement("button");c.type="submit",c.textContent="Create Project",t.appendChild(a),t.appendChild(c),t.addEventListener("submit",(e=>{e.preventDefault();const a=e.target.elements.title.value;n.createProject(a),e.target.reset(),t.style.display="none",l()})),e.appendChild(t)}()}))}()})();