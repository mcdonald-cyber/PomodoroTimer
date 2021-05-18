import React from "react";
import {minutesToDuration, secondsToDuration} from "../utils/duration";


function ProgressBar ({session, focusDuration, breakDuration}) {

    

    if (session) {
      let sessionLabel;
      if (session.label === "Focusing") {
          sessionLabel = `${session.label} for ${minutesToDuration(focusDuration)} minutes`
      } else {
          sessionLabel = `${session.label} for ${minutesToDuration(breakDuration)} minutes`
      }
        
      
      
      const duration = session.label === "Focusing" ? focusDuration : breakDuration;
      console.log(duration)
      const progress = 100-(session.timeRemaining / (duration * 60) ) * 100;
      console.log(progress)

    

return (
    
      <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {sessionLabel} 
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
    </div>
)
}
return null;
}

export default ProgressBar;
