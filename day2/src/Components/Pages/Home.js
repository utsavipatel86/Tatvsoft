import React, { Component } from 'react';
import Title from'../title';
class Home extends Component {
    data = [
        {
            title: "LDRP-ITR",
        },
        {
            title: "Nirma University",
        },
        {
            title: "GMERS",
        }
    ]

    render() {
        return (
            <>
                <h1>This is Home Class Component</h1>
                {this.data.map((obj) => {
                    return <Title data={obj} />
                })}
            </>
        )
    }
}
export default Home;