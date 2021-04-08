import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/slice/user';
import Loader from 'react-loader-spinner';
import { Container } from '../components/styles/Container';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
  CardObs,
  CardError,
  CardBar,
} from '../components/styles/Card';
import FadeIn from '../components/styles/FadeIn';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { requestStarted, user } = useSelector((state) => state.user);

  const [username, setUsername] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username.toLowerCase()));
  };

  useEffect(() => {
    if (user) {
      history.push('/question');
    }
  }, [history, user]);

  return (
    <Container>
      <CardWrapper>
        <FadeIn duration="0.4s" delay="0.1s">
          <Container noMargin>
            <CardBar />
          </Container>
        </FadeIn>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <FadeIn duration="0.4s" delay="0.2s">
              <CardHeading red big bold>
                Hey there :)
              </CardHeading>
            </FadeIn>
            <FadeIn duration="0.4s" delay="0.8s">
              <CardHeading>Its nice to see you here!</CardHeading>
            </FadeIn>
            <FadeIn duration="0.4s" delay="1.4s">
              <CardHeading>Please, tell me your name:</CardHeading>
            </FadeIn>
          </CardHeader>
          <FadeIn duration="0.4s" delay="1.8s">
            <CardBody>
              <CardFieldset>
                <CardInput
                  placeholder="Username"
                  type="text"
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </CardFieldset>
              {username && username.length < 2 && (
                <CardError>the name must be more than two digits</CardError>
              )}
              {requestStarted ? (
                <Container>
                  <Loader type="Circles" color="#00BFFF" height={80} width={80} />
                </Container>
              ) : (
                <CardFieldset>
                  <CardButton
                    type="submit"
                    disabled={username && username.length < 2}
                  >
                    Submit
                  </CardButton>
                </CardFieldset>
              )}
              <CardFieldset>
                <CardObs>LMS - challenge</CardObs>
              </CardFieldset>
            </CardBody>
          </FadeIn>
        </form>
      </CardWrapper>
    </Container>
  );
};

export default Home;
