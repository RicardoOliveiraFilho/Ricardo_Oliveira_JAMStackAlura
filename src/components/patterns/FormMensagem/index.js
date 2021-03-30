import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';

import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';

import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import FormWrapper from './styles/FormWrapper';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
};

function FormContent({ buttonClose }) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [messageData, setMessageData] = useState({
    nameUser: '',
    emailUser: '',
    messageUser: '',
  });
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [messageEmail, setMessageEmail] = useState('');
  const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  const isFormInvalid = !emailIsValid || messageData.nameUser.length === 0
    || messageData.emailUser.length === 0
    || messageData.messageUser.length === 0;

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');

    setMessageData({
      ...messageData,
      [fieldName]: event.target.value,
    });
  }

  function validateEmail(event) {
    if (!emailPattern.test(event.target.value)) {
      setEmailIsValid(false);
      setMessageEmail('Por favor, insira um endereço de email válido!');
    } else {
      setEmailIsValid(true);
      setMessageEmail('');
    }
  }

  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);
        setSubmissionStatus(formStates.LOADING);

        const messageDTO = {
          name: messageData.nameUser,
          email: messageData.emailUser,
          message: messageData.messageUser,
        };

        fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(messageDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível submeter o form');
          })
          // eslint-disable-next-line no-unused-vars
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
          });
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid.Col>
          <Grid.Row
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{
              xs: 'column-reverse',
              md: 'row',
            }}
            paddingRight="15px"
            paddingLeft={{
              xs: '10px',
              md: '249px',
            }}
          >
            <Text
              tag="h2"
              variant="titleModalXS"
            >
              Envie sua Mensagem
            </Text>
            {buttonClose}
          </Grid.Row>
          <Grid.Row
            display="flex"
            alignItems="stretch"
            justifyContent="flex-start"
            flexDirection="column"
            paddingLeft={{
              xs: '17px',
              md: '45px',
            }}
            paddingRight={{
              xs: '19px',
              md: '45px',
            }}
          >
            <Text
              tag="label"
              variant="labelModalXS"
            >
              Seu nome
            </Text>
            <TextField
              name="nameUser"
              value={messageData.nameUser}
              onChange={handleChange}
              height="48px"
            />
            <Text
              tag="label"
              variant="labelModalXS"
            >
              Seu email
            </Text>
            <TextField
              name="emailUser"
              value={messageData.emailUser}
              onChange={handleChange}
              onBlur={validateEmail}
              height="48px"
            />
            {!emailIsValid && (
              <Text
                marginTop="-15px"
                marginBottom="15px"
                color="red"
                variant="inputText"
              >
                {messageEmail}
              </Text>
            )}
            <Text
              tag="label"
              variant="labelModalXS"
            >
              Sua mensagem
            </Text>
            <TextField
              name="messageUser"
              tag="textarea"
              value={messageData.messageUser}
              onChange={handleChange}
              height="120px"
              resize="none"
            />
          </Grid.Row>
          <Grid.Row
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="-10px"
          >
            <Text
              tag="label"
              variant="labelModalXS"
              marginRight="12px"
            >
              Enviar
            </Text>
            <Button
              disabled={isFormInvalid}
              circle
              type="submit"
            >
              { '>' }
            </Button>
          </Grid.Row>
          <Grid.Row
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="-50px"
          >
            {isFormSubmited && submissionStatus === formStates.DONE && (
              <>
                <Lottie
                  width="140px"
                  height="140px"
                  className="lottie-container basic"
                  config={{ animationData: successAnimation, loop: false, autoplay: true }}
                />
                <Text
                  color="green"
                  variant="inputText"
                  marginLeft={{
                    xs: '-5px',
                    md: '-45px',
                  }}
                  marginTop={{
                    xs: '-80px',
                    md: '0px',
                  }}
                >
                  Mensagem enviada com sucesso!
                </Text>
              </>
            )}

            {isFormSubmited && submissionStatus === formStates.ERROR && (
              <>
                <Lottie
                  width="140px"
                  height="140px"
                  className="lottie-container basic"
                  config={{ animationData: errorAnimation, loop: false, autoplay: true }}
                />
                <Text
                  color="red"
                  variant="inputText"
                  marginLeft={{
                    xs: '-5px',
                    md: '-45px',
                  }}
                  marginTop={{
                    xs: '-80px',
                    md: '0px',
                  }}
                >
                  Não foi possível enviar a mensagem!
                </Text>
              </>
            )}

            {isFormSubmited && submissionStatus === formStates.LOADING && (
              <>
                <Lottie
                  width="140px"
                  height="140px"
                  className="lottie-container basic"
                  config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
                />
              </>
            )}
          </Grid.Row>
        </Grid.Col>
      </Box>
    </FormWrapper>
  );
}

export default function FormMensagem({ propsDoModal }) {
  return (
    <Grid.Row>
      <Grid.Col>
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          backgroundColor="white"
          borderRadius="10px 10px 0px 0px"
          width={{
            xs: '359px',
            md: '900px',
          }}
          height={{
            xs: '599px',
            md: '600px',
          }}
          {...propsDoModal}
        >
          <FormContent {...propsDoModal} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
