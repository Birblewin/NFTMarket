import React from 'react'
import Launchpadcontainer from './Launchpadcontainer'
import Overview from "./Overview"
import Team from './team'

const Launchpad = () => {
    // A BOOLEAN TO KEEP TRACK OF WHETHER OR NOT TO VIEW THE TEAM SECTION
    const [viewTeam, setViewTeam] = React.useState(false)

    // A FUNCTION TO GENERATE THE OVERVIEW SECTION
    function OverviewGenerator() {
        const OverviewArray = []

        for(let i = 0; i < 1; i++){
            OverviewArray.push(<Overview/>)
        }

        return OverviewArray
    }

    // A FUNCTION TO GENERATE THE TEAM SECTION
    function TeamGenerator() {
        const TeamArray = []

        for(let i = 0; i < 5; i++){
            TeamArray.push(<Team/>)
        }

        return TeamArray
    }

  return (
    <div className='Launchpad-container'>
      <Launchpadcontainer/>
      
      <div className="launchpad-page-container-viewOverviewToggle">
                <p 
                    onClick={() => setViewTeam(false)}
                    
                    style={
                        
                      viewTeam
                            ? 
                        null 
                            : 
                        {
                            "backgroundColor": "#EE9E26",
                            "border": "2px solid black",
                            "borderRadius": "20px",
                            "padding": "10px"
                        }
                    }
                >Overview</p>
 
                <p 
                    onClick={() => setViewTeam(true)}
                    
                    style={
                        viewTeam 
                            ? 
                        {
                            "backgroundColor": "#EE9E26",
                            "border": "2px solid black",
                            "borderRadius": "20px",
                            "padding": "10px"
                        } 
                            : 
                        null
                    }
                >Team
                </p>
       

            </div>
                  
            <div className={viewTeam ? "launchpad-page-container-Holder" : ""}>
                {viewTeam ? TeamGenerator() : 
                OverviewGenerator()}
            </div>
    </div>
  )
}

export default Launchpad