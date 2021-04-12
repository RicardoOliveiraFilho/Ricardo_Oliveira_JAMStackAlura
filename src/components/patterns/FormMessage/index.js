import React, { useState } from 'react';

import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const isFormInvalid =
    userInfo.nome.length === 0 || userInfo.email.length === 0;

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <Text variant="title" tag="h1" color="primary.main">
        Envie sua Mensagem!
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Mensagem..."
          name="mensagem"
          tag="textarea"
          value={userInfo.mensagem}
          onChange={handleChange}
          height="120px"
          resize="none"
        />
      </div>
      <Button
        ghost
        variant="primary.main"
        fullWidth
        type="submit"
        disabled={isFormInvalid}
        marginLeft={{
          xs: '0px',
          lg: '-1px',
        }}
      >
        Enviar
      </Button>
    </form>
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
