import * as React from 'react';


export default class Calendar extends React.Component {


    render() {
        const text = (
            <div id="Calendar" className="page calendar-page">
                <ul>
                    <li>
                        <h6>11/5 Monday</h6>
                        <p>Martha Birthday</p>
                    </li>
                    <li>
                        <h6>15/6 Sunday</h6>
                        <p>Job interview for internal position</p>
                    </li>
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
