import * as React from 'react';


export default class Notifications extends React.Component {


    render() {
        const text = (
            <div id="Notifications" className="page notifications-page">
                <ul>
                    <li>Monday meeting</li>
                    <li>Regarding org chart changes</li>
                    <li>Meeting with Cliff</li>
                    <li>Global Marketing Meeting</li>
                    <li>Out tonight with collegues?</li>
                </ul>
            </div>
        );

        return (
            <div>
                {this.props.children ? this.props.children : text}
            </div>
        );
    }
}
