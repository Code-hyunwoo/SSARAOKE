import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
// import './UserVideo.css';

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        // // Gets the nickName of the user
        // console.log('-----subscriber-----');
        // console.log(this.props);
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
        // return '유저'
    }

    render() {
        return (
            <div id={this.getNicknameTag()}>
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent">
                        {/* OpenViduVideoComponent = video태그 하나 */}
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />
                        <span>{this.getNicknameTag()}</span>
                    </div>
                ) : null}
            </div>
        );
    }
}
