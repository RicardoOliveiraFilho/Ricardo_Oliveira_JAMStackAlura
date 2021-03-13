import React, { useState } from 'react';

import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import FormWrapper from './styles/FormWrapper';

function FormContent({ buttonClose }) {
  const [messageData, setMessageData] = useState({
    nameUser: '',
    emailUser: '',
    messageUser: '',
  });

  const isFormInvalid = messageData.nameUser.length === 0
    || messageData.emailUser.length === 0
    || messageData.messageUser.length === 0;

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');

    setMessageData({
      ...messageData,
      [fieldName]: event.target.value,
    });
  }

  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
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
              md: '289px',
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
              height="48px"
            />
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
