import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../modules/home/Home';
import Question from '../modules/question/Question';
import NoMatch from '../modules/components/NoMatch';
import Ranking from '../modules/ranking/Ranking';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/ranking" component={Ranking} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
