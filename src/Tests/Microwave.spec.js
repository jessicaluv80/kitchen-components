import React from 'react'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Microwave from '../Microwave'

// it('renders correctly', () => {
//     const tree = Renderer
//         .create(<Kitchen />)
//         .toJSON()
//     expect(tree).toMatchSnapshot()
// })

it('microwave shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Microwave />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        'Microwave is here',
    )
})