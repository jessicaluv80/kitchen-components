import React, { Component } from 'react'


class Microwave extends Component {
    constructor() {
        super()
        console.log('App.constructor()')
    }

    componentWillMount() {
        console.log('App.componentWillMount()')
    }


    render() {
        console.log('App.render()')
        return (
            <div>
                Microwave is here
            </div>
        )

    }
    componentDidMount() {
        console.log('App.componentDidMount')
    }
}

export default Microwave

