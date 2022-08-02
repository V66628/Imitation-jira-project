import React, { useState } from 'react'

export default function Search({params,setParams,users}) {
  return (
    <form>
        <input type="text" onChange={e=>setParams({...params,name:e.target.value})}/>
        <select onChange={event=>setParams({...params,id:event.target.value})}>
            <option value="">负责人</option>
            {
                users.map(item=>{
                    return  <option key={item.id} value={item.id}>{item.name}</option>
                })
            }
        </select>
    </form>
  )
}
