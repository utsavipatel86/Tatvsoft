import React, { Component } from 'react';
import Title from '../title';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Welcome visitor',
            desc: 'Here we upload best content for knowledge'
        }
    }
    like() {
        this.setState({
            title: 'Thank you for like !',
            desc: 'You will get all notifications related to our channel'
        })
    }
    render() {
        return (
            <>
                <h1>This is Home Class Component</h1>
                <Title state={this.state} />
                <button onClick={() => this.like()}>Like</button>
            </>
        )
    }
}
export default Home;