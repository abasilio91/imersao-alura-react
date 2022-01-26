import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import React from 'react';
import { useRouter } from 'next/router';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['02']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const [username, setUsername] = React.useState('');
  const roteamento = useRouter();
  // const [buttonDisabled, setButtonDisabled] = React.useState('True');

  return (
    <>  
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals['01'],
          backgroundImage: 'url(https://wallpapercave.com/wp/wp2189205.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.primary['03'],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
          <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['01'] }}>
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={function(event) {
                const valor = event.target.value;
                setUsername(valor);
                
                // if (valor.length > 2) {
                //   setButtonDisabled('False');
                // };

              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals["05"],
                  mainColor: appConfig.theme.colors.neutrals["05"],
                  mainColorHighlight: appConfig.theme.colors.primary["05"],
                  backgroundColor: appConfig.theme.colors.neutrals["01"],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              disabled = {username.length < 3}
              buttonColors={{
                contrastColor: appConfig.theme.colors.primary["05"],
                mainColor: appConfig.theme.colors.primary["01"],
                mainColorLight: appConfig.theme.colors.primary["02"],
                mainColorStrong: appConfig.theme.colors.primary["04"],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary["02"],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals["02"],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.primary["05"],
                backgroundColor: appConfig.theme.colors.neutrals["05"],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}