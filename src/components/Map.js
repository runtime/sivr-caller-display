import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import '../App.css';



export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calls:[{latitude: 40.730610, longitude: -73.935242 },
                {latitude: 40.7184584, longitude: -73.9898583 }
            ]
        }
    }

    componentDidMount() {
        this.geocoder = new this.props.google.maps.Geocoder();

        this.geocoder.geocode({'address': '622 third avenue, New York, NY 10017'}, function handleResults(results,status) {
            console.log(status + " " + results[0]);
        });
    }


    displayMarkers = () => {
        return this.state.calls.map((call, index) => {
            return <Marker key={index} id={index} position={{
                lat: call.latitude,
                lng: call.longitude
            }}
            onClick={() => console.log("clicked " + call.latitude)} />
        })
    }

    render() {
        return (
        <div className='map'> 
        <Map
        google={this.props.google}
        zoom={13}
        
        initialCenter={{
            lat: 40.730610,
            lng: -73.935242
            }}
            >

            {this.displayMarkers()}
        </Map>
        </div>
        );
    }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyBdJDhJCcoKjIp3IGbIQeEJbKxT8qAKuPc'
})(MapContainer);