import React ,{useContext}from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {

    const user= useContext(UserContext);
    const channel= useContext(ChannelContext);

  return (
    <div>
        {user} - {channel}
        {/* <UserContext.Consumer>
          
          {
            user=>{
                return (
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                                return (
                                    <div>
                                        User Context is {user} and channel context is {channel}
                                    </div>
                                )
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
          }
            
        </UserContext.Consumer> */}

      
    </div>
  )
}

export default ComponentF
