import React, { Component } from 'react'
import Microwave from './Microwave'
import Oven from './Oven'


class Kitchen extends Component {
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
                Kitchen is here and ready to go
                <Microwave />
                <Oven />
            </div>)
    }

    componentDidMount() {
        console.log('App.componentDidMount')
    }
}



export default Kitchen
