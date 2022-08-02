import React from 'react'

export default function List({list,users}) {
  return (
    <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
           {
                list.map(
                    item=>
                    <tr key={item.id}>
                       <td>{item?.name}</td>
                       <td>{users.find(user=>item.personId==user.id)?.name || '未知'}</td>
                    </tr>
                )
           }
        </tbody>
    </table>
  )
}
