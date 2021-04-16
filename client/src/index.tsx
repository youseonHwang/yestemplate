import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

//* set saga middle-ware & create_store
const sagaMiddleware = createSagaMiddleware();

{/* 리듀서와 사가로 만든 모듈 가져와서 store생성 */ }
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

{/* 사가들을 모아둔 rootSaga를 미들웨어로 사용 */ }
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
