import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App }  from './app';

export const render = (container: Element | null) => ReactDOM.render(<App/>, container);


render(document.getElementById('root'));

