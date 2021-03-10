import React, { useState } from 'react';

function FormContent() {
  const [messageData, setMessageData] = useState({
    nameUser: 'ricardo.oliveira1307',
    emailUser: 'ricardo.oliveira1307@gmail.com',
    messageUser: 'Mensagem...',
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
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <label htmlFor="nameUser">
          Seu Nome
          <input
            id="nameUser"
            name="nameUser"
            type="text"
            value={messageData.nameUser}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="emailUser">
          Seu email
          <input
            id="emailUser"
            name="emailUser"
            type="email"
            value={messageData.emailUser}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="messageUser">
          Sua mensagem
          <textarea
            id="messageUser"
            name="messageUser"
            value={messageData.messageUser}
            onChange={handleChange}
            maxLength={100}
          />
        </label>
      </div>

      <button type="submit" disabled={isFormInvalid}>
        Enviar
      </button>
    </form>
  );
}

export default function FormMensagem({ propsDoModal }) {
  return (
    <div {...propsDoModal}>
      <FormContent />
    </div>
  );
}
