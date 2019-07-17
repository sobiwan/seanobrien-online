import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxMetrics from './middlewares/reduxMetrics';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      reduxMetrics,
      reduxThunk
    )
  )
);

if (
  process.env.NODE_ENV !== 'production'
) {
  if (module.hot) {
    module.hot.accept(
      './rootReducer',
      () => {
        store.replaceReducer(
          rootReducer
        );
      }
    );
  }
}

export default store;
