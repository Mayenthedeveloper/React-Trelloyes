// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the List component available
import Card from './List.js';

import renderer from 'react-test-renderer';

// this is the test case
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
      
    // render the component, this is the actual test, if something is wrong it will fail here
 ReactDOM.render(<list />, div);
 
 // clean up code
    ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<list
       title = 'test'
       content = 'test'
       key = 'test'
       /> )
       .toJSON();
       expect(tree).toMatchSnapshot();
})