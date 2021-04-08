import Router from './wrappers/Router';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  );
};

export default App;
