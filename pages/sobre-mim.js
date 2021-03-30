import React, { useState } from 'react';

import Modal from '../src/components/commons/Modal';
import FormMensagem from '../src/components/patterns/FormMensagem';
import Box from '../src/components/foundation/layout/Box';
import Header from '../src/components/commons/Header';
import SectionTitle from '../src/components/commons/SectionTitle';
import Image from '../src/components/commons/Image';
import Button from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';

export default function SobreMim() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {(propsDoModal) => (
          <FormMensagem propsDoModal={propsDoModal} />
        )}
      </Modal>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <SectionTitle
          alignSelf="center"
          marginTop={{
            xs: '32px',
            md: '62px',
          }}
        >
          Sobre Mim
        </SectionTitle>
        <Image
          src="http://placehold.it/280x280"
          alt="Minha Foto"
          width={{
            xs: 280,
            md: 450,
          }}
          height={{
            xs: 280,
            md: 450,
          }}
          alignSelf="center"
          marginTop={{
            xs: '24px',
            md: '32px',
          }}
        />
        <Image
          src="/images/planta.png"
          alt="Planta"
          width={{
            xs: 194,
            md: 400,
          }}
          height={{
            xs: 290,
            md: 600,
          }}
          position="absolute"
          zIndex="-10"
          opacity=".5"
          transform="rotate(490deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)"
          marginTop={{
            xs: '215px',
            md: '350px',
          }}
          marginLeft={{
            xs: '-5px',
            md: '215px',
          }}
        />
        <Button
          circle
          marginLeft={{
            xs: '200px',
            md: '615px',
          }}
          marginTop={{
            xs: '15px',
            md: '40px',
          }}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          +
        </Button>
        <Image
          src="/images/planta.png"
          alt="Planta"
          width={{
            xs: 194,
            md: 400,
          }}
          height={{
            xs: 290,
            md: 600,
          }}
          position="absolute"
          zIndex="-10"
          opacity=".5"
          transform="rotate(590deg) rotateY(180deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)"
          marginTop={{
            xs: '215px',
            md: '350px',
          }}
          marginLeft={{
            xs: '240px',
            md: '647px',
          }}
        />
        <Box
          flex="1"
          display="flex"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          marginTop={{
            xs: '0px',
            md: '40px',
          }}
        >
          <Text
            tag="p"
            variant="cardText"
            paddingLeft={{
              xs: '60px',
              md: '290px',
            }}
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
            marginRight={{
              xs: '60px',
              md: '20px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed
            venenatis sem in felis efficitur imperdiet. Etiam dignissim neque
            vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta
            ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a
            felis non, eleifend congue ante.
          </Text>
          <Text
            tag="p"
            variant="cardText"
            paddingRight={{
              xs: '60px',
              md: '280px',
            }}
            textAlign={{
              xs: 'left',
              md: 'right',
            }}
            marginLeft={{
              xs: '60px',
              md: '20px',
            }}
          >
            Fusce vitae ante ut sapien posuere elementum non sit amet purus.
            Integer vulputate pharetra tincidunt. Maecenas quis rutrum urna.
            Sed egestas tortor risus, vitae pretium diam varius eu. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Morbi eu arcu augue.
          </Text>
        </Box>
        <SectionTitle
          alignSelf="center"
          marginTop={{
            xs: '32px',
            md: '55px',
          }}
          marginBottom={{
            xs: '32px',
            md: '10px',
          }}
        >
          Meus Repositórios
        </SectionTitle>
        <Box
          as="ul"
          flex="1"
          display="flex"
          flexDirection="column"
        >
          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            Projeto Report
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/projeto-report
          </Text>

          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            Projeto Report
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/projeto-report
          </Text>

          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            Projeto Report
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/projeto-report
          </Text>

          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            Projeto Report
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/projeto-report
          </Text>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
