import React from 'react'
// import styled from 'styled-components'

// const listStyle = styled.li`
//     border: 1px solid #000;
//     padding: 10px;
//     margin: 10px;
//     display: flex;
//     justify-content: space-between;
//     .text {
//         flex: 1;
//     }
//     .percentage {
//         margin-left: 10px;
//     }
// `

export default function Beer({beer}) {
  return (
    <li>
        <h3>{beer.title}</h3>
        <p className='text'>{beer.description}</p>
        <p className='percentage'>{beer.alchool}</p>
    </li>
    )
}
