import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { newRanking } from '../../redux/slice/ranking';
import Loader from 'react-loader-spinner';
import { Container } from '../components/styles/Container';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardError,
  CardButton,
  CardObs,
  CardCheckbox,
  CardCheckboxOptions,
  CardBar,
} from '../components/styles/Card';
import FadeIn from '../components/styles/FadeIn';

const values = [
  {
    id: 1,
    title: '#tamojunto',
    score: 25,
  },
  {
    id: 2,
    title: '#aprendemosParaCrescer',
    score: 25,
  },
  {
    id: 3,
    title: '#entregamosUAU',
    score: 25,
  },
  {
    id: 4,
    title: '#somosMobilizadores',
    score: 25,
  },
  {
    id: 5,
    title: '#expertiseNaGestaoDeProjetos',
    score: 0,
  },
];

const Question = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { ranking, requestStarted } = useSelector((state) => state.ranking);

  const [valuesSelected, setValuesSelected] = useState([]);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [history, user]);

  useEffect(() => {
    if (ranking) {
      history.push('/ranking');
    }
  }, [history, ranking]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const findWrongValue = valuesSelected.find((v) => v.id === 5);
    const score = findWrongValue
      ? 0
      : valuesSelected.reduce((total, value) => total + value.score, 0);
    const model = {
      idUser: user.id,
      score,
    };

    dispatch(newRanking(model));
  };

  const onChangeCheckBox = (isChecked, value) => {
    const newValuesSelected = JSON.parse(JSON.stringify(valuesSelected));
    if (isChecked) {
      if (!newValuesSelected.find((v) => v.id === value.id)) {
        newValuesSelected.push(value);
      }
    } else {
      const index = newValuesSelected.indexOf(value);
      newValuesSelected.splice(index, 1);
    }

    setValuesSelected(newValuesSelected);
  };

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
              <CardHeading small>
                What a beautiful name you have{' '}
                <CardHeading red big bold>
                  {user && user.fullName}!
                </CardHeading>
              </CardHeading>
            </FadeIn>
            <FadeIn duration="0.4s" delay="0.8s">
              <CardHeading small>Now, please answer the</CardHeading>
              <CardHeading small>following question and we're good.</CardHeading>
            </FadeIn>
            <FadeIn duration="0.4s" delay="1.4s">
              <CardHeading marginTop small bold>
                What are all of Mobiliza core values?
              </CardHeading>
            </FadeIn>
          </CardHeader>
          <FadeIn duration="0.4s" delay="1.6s">
            <CardBody>
              <CardFieldset>
                {values &&
                  values.map((v) => {
                    return (
                      <span key={v.title}>
                        <CardCheckboxOptions>
                          <CardCheckbox
                            value={v}
                            onChange={(e) => onChangeCheckBox(e.target.checked, v)}
                          />
                          {v.title}
                        </CardCheckboxOptions>
                        <br />
                      </span>
                    );
                  })}
              </CardFieldset>
              <CardFieldset>
                {valuesSelected.length === 0 && (
                  <div style={{ textAlign: 'center' }}>
                    <CardError>you need to select at least one option</CardError>
                  </div>
                )}
                {requestStarted ? (
                  <Container>
                    <Loader type="Circles" color="#00BFFF" height={80} width={80} />
                  </Container>
                ) : (
                  <CardButton type="submit" disabled={valuesSelected.length === 0}>
                    Submit
                  </CardButton>
                )}
              </CardFieldset>
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

export default Question;
