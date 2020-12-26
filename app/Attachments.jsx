import * as React from 'react';


export default class Attachments extends React.Component {


    render() {
        const text = (
            <div id="Attachments" className="page attachments-page">
                <ul>
                    <li>Build enterprise apps</li>
                    <li>Fw: Regarding Multiline textbox</li>
                    <li>Away next week</li>
                    <li>Fw: Your Costume is ready</li>
                    <li>Update completed</li>
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
