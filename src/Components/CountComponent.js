import React from 'react'

function CountComponent({text,count}) {
    console.log(`rendering ${text}`)
  return (
    <div>
        {text} - {count}
    </div>
  )
}

export default React.memo(CountComponent) 
