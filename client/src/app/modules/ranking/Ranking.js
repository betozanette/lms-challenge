import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRanking } from '../../redux/slice/ranking';
import Loader from 'react-loader-spinner';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container } from '../components/styles/Container';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardButton,
  CardObs,
  CardBar,
  CardList,
  CardListItem,
} from '../components/styles/Card';
import FadeIn from '../components/styles/FadeIn';

const Question = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allRanking, requestStarted } = useSelector((state) => state.ranking);

  useEffect(() => {
    dispatch(getRanking());
  }, []);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <Container>
      <CardWrapper>
        <FadeIn duration="0.4s" delay="0.2s">
          <Container noMargin>
            <CardBar />
          </Container>
        </FadeIn>
        <CardHeader>
          <FadeIn duration="0.4s" delay="0.4s">
            <CardHeading red big bold>
              Ranking
            </CardHeading>
          </FadeIn>
        </CardHeader>
        <FadeIn duration="0.4s" delay="0.8s">
          <CardBody>
            {requestStarted ? (
              <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            ) : (
              allRanking &&
              allRanking.length > 0 &&
              allRanking.map((r, i) => {
                return (
                  <CardList key={r.title}>
                    <CardListItem bold={r.Users.id === user.id} first={i === 0}>
                      {`${i + 1} - ${r.score} - ${r.Users.fullName} - ${format(
                        parseISO(r.updatedAt),
                        "'Dia' dd 'de' MMMM', às ' HH:mm'h' ",
                        {
                          locale: pt,
                        },
                      )} `}
                    </CardListItem>
                  </CardList>
                );
              })
            )}
            <CardFieldset>
              <CardButton type="button" onClick={() => history.push('/question')}>
                Try again
              </CardButton>
            </CardFieldset>
            <CardFieldset>
              <CardObs>LMS - challenge</CardObs>
            </CardFieldset>
          </CardBody>
        </FadeIn>
      </CardWrapper>
    </Container>
  );
};

export default Question;
