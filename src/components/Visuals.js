import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Visuals.css'
import StackCode from './StackCode'


function Visuals() {
  const myState = useSelector((state) => state.updateProps)
  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <div className='stackContainer'>
          {
            myState.arrVal.map((item) => {
              return (
                <div className='stack'>
                  {item}
                </div>
              )
            })
          }
        </div>
        <div className='codeContainer'>
          <StackCode/>
        </div>
        {/* <div className='codeContainer'>
          <h1>hii</h1>
        </div> */}
      </div>

      
    </>
  )
}

export default Visuals