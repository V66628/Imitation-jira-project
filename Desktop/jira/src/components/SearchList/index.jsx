import React,{useState,useEffect} from 'react'
import Search from './Search'
import List from './List'
import cleanObject from 'utils/cleanObject'
import * as qs from 'qs'
import useDebunce from 'utils/useDebunce'
const apiUrl=process.env.REACT_APP_API_URL
export default function SearchList() {
  let [params,setParams]=useState({
    id:'',
    name:''
})
let [users,setUsers]=useState([
  {
      name:'',
      id:''
  }
])
  let [list,setList]=useState([])
  const debuncedParams=useDebunce(params,3000)
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debuncedParams))}`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debuncedParams])
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
              setUsers(await response.json())
            }
        })
    },[])
  return (
    <div>
      <Search users={users} params={params} setParams={setParams}/>
      <List users={users} list={list}/>
    </div>
  )  
}
