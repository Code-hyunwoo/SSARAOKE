import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    render() {
        return (
            <div>
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent" id={this.getNicknameTag()}>
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />
                        <span>{this.getNicknameTag()}</span>
                    </div>
                ) : null}
            </div>
        );
    }
}
