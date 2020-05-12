import React from 'react';
import Firebase from 'firebase';
import config from '../services/config';


class CallerList extends React.Component {

    constructor(props) {
        super(props);
        Firebase.initializeApp(config);

        this.state = {
            calls: []
        }

    }

    getCallData = () => {
        let ref = Firebase.database().ref('calls');
        ref.on('value', snapshot => {
            let calls = snapshot.val();
            let newState = [];
            for (let call in calls) {
                newState.push({
                    id: call,
                    name: calls[call].name,
                    location: calls[call].location,
                    sitrep: calls[call].situation
                });
            }
            
            this.setState({
                calls: newState
            });
        });
        console.log('DATA RETREIVED');
    }

    componentDidMount() {
        this.getCallData();
    }

    render() {
        //const {calls} = this.state;
        return(
              <div className = 'wrapper' >
                  
                      {this.state.calls.map((call) => {
                             return (
                                <div key={call.id} className='call-card'>
                                    <h3>{call.name}</h3>
                                    <p className='call-card-p'>{call.location['business-name']}, {call.location['street-address']}</p>
                                    <p className='call-card-p'>{call.sitrep}</p>
                                </div>
                                )
                      })}
                
              </div>
        )  
    }

}

export default CallerList;