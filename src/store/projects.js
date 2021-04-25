import {createAction,createReducer} from "@reduxjs/toolkit";



export const projectAdded = createAction("projectAdded");
export const projectResolved = createAction("projectResolved");
let id=0;
export const projectsReducer = createReducer([],{
    [projectAdded.type]:(projects,action)=>{
        projects.push({
            id:++id,
            description : action.payload,
            resolved:false
        })
    },
    [projectResolved] : (projects,action)=>{
      const index=  projects.indexOf(projects.filter(p=>p==action.payload));
      projects[index].resolved=true;
    }

})





