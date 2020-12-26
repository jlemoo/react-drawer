import * as React from 'react';


export default class Favourites extends React.Component {


    render() {
        const text = (
            <div id="Favourites" className="page favourites-page">
                <ul>
                    <li>70% Discount!</li>
                    <li>90% Discount!</li>
                    <li>One time offer!</li>
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
