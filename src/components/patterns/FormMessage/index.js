/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';

import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import FormMessageWrapper from './styles/FormMessageWrapper';

import emailUtils from '../../../data/email-pattern';

import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [nomeError, setNomeError] = useState('');
  const [nomeValido, setNomeValido] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailValido, setEmailValido] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  const [mensagemValida, setMensagemValida] = useState(false);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function validateForm() {
    if (userInfo.nome.length === 0) {
      setNomeError('O campo Nome é obrigatório!');
      setEmailValido(false);
    } else {
      setNomeError('');
      setNomeValido(true);
    }

    if (userInfo.email.length === 0) {
      setEmailError('O campo Email é obrigatório!');
      setEmailValido(false);
    } else if (!emailUtils.emailPattern.test(userInfo.email)) {
      setEmailError('Por favor, insira um Email válido!');
      setEmailValido(false);
    } else {
      setEmailError('');
      setEmailValido(true);
    }

    if (userInfo.mensagem.length === 0) {
      setMensagemError('O campo Mensagem é obrigatório!');
      setMensagemValida(false);
    } else {
      setMensagemError('');
      setMensagemValida(true);
    }

    return nomeValido && emailValido && mensagemValida;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      setIsFormSubmited(true);
      setSubmissionStatus(formStates.LOADING);

      const messageDTO = {
        name: userInfo.nome,
        email: userInfo.email,
        message: userInfo.mensagem,
      };

      fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(messageDTO),
      })
        .then(respostaDoServidor => {
          if (respostaDoServidor.ok) {
            return respostaDoServidor.json();
          }

          throw new Error('Não foi possível submeter o form');
        })
        .then(respostaConvertidaEmObjeto => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(error => {
          setSubmissionStatus(formStates.ERROR);
        });
    }
  }

  return (
    <FormMessageWrapper onSubmit={handleSubmit}>
      <Text variant="title" tag="h1" color="primary.main">
        Envie sua Mensagem!
      </Text>
      <div>
        {nomeError && (
          <Text color="primary.error" tag="p" variant="paragraph2">
            * {nomeError}
          </Text>
        )}
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
          color={nomeError ? 'error' : 'main'}
        />
      </div>
      <div>
        {emailError && (
          <Text color="primary.error" tag="p" variant="paragraph2">
            * {emailError}
          </Text>
        )}
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          color={emailError ? 'error' : 'main'}
        />
      </div>
      <div>
        {mensagemError && (
          <Text color="primary.error" tag="p" variant="paragraph2">
            * {mensagemError}
          </Text>
        )}
        <TextField
          placeholder="Mensagem..."
          name="mensagem"
          tag="textarea"
          value={userInfo.mensagem}
          onChange={handleChange}
          height="120px"
          resize="none"
          color={mensagemError ? 'error' : 'main'}
        />
      </div>
      <Button
        ghost
        variant="primary.main"
        fullWidth
        type="submit"
        marginLeft={{
          xs: '0px',
          lg: '-1px',
        }}
      >
        Enviar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '-38px',
            width: '100%',
          }}
        >
          <Lottie
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: false,
              autoplay: true,
            }}
          />

          <Text
            color="primary.success"
            tag="p"
            marginTop={{
              xs: '-45px',
              sm: '-70px',
              lg: '-70px',
            }}
          >
            Envio Realizado!
          </Text>
        </div>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '-38px',
            width: '100%',
          }}
        >
          <Lottie
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
          <Text
            color="primary.error"
            tag="p"
            marginTop={{
              xs: '-45px',
              sm: '-70px',
              lg: '-70px',
            }}
          >
            Envio não Realizado!
          </Text>
        </div>
      )}

      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '-38px',
            width: '100%',
          }}
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: loadingAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
      )}
    </FormMessageWrapper>
  );
}

export default function FormMessage({ propsDoModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0}>
      <Grid.Col display="flex">
        <Box
          boxShadow="3px 3px 3px 3px rgba(7, 12, 14, 0.5)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
