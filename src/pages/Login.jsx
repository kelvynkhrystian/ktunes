import React from 'react';

class Login extends React.Component {

  render() {

    return (
      <div>
        <div>
          <img src='logo' alt="LogoKhrystianTunes" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Digite o nome de novo usuário"
          />
          <button>
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
