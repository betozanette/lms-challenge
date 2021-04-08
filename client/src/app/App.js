import Router from './wrappers/Router';
import { Provider } from 'react-redux';
import store from './redux/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
