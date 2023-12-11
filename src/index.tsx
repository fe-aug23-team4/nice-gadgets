import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Root } from './Root';
import { store } from './store/store';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <Root />
  </Provider>,
);
