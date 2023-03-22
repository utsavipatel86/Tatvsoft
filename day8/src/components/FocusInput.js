import React, { Component } from 'react'
import InputRef from './InputRef'
// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    render() {
        return (
            <div>
                <InputRef parent={this.componentRef} />
            </div>
        )
    }
}