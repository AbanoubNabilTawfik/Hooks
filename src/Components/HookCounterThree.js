import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <label>First Name</label>
                <input type="text"
                    value={name.firstName}
                    onChange={e=>setName({...name,firstName:e.target.value})} />
                <lable>Last Name</lable>
                <input type="text"
                    value={name.lastName}
                    onChange={e=>setName({...name,lastName:e.target.value})} />
                <h2>Your First Name is - {name.firstName}</h2>
                <h2>Your Last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
