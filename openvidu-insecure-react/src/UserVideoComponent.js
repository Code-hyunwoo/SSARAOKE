import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        // Gets the nickName of the user
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    render() {
        return (
            <div>
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent">
                        {/* OpenViduVideoComponent = video태그 하나 */}
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />
                        <div><span>{this.getNicknameTag()}</span></div>
                    </div>
                ) : null}
            </div>
        );
    }
}
