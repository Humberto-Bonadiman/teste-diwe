import React, { useEffect, useState } from 'react';
import LoginWeb from '../components/LoginWeb';
import LoginMobile from '../components/LoginMobile';

function Login() {
  const [isGreaterThan600px, setIsGreaterThan600px] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setIsGreaterThan600px(true);
      } else {
        setIsGreaterThan600px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      { !isGreaterThan600px && <LoginMobile /> }
      { isGreaterThan600px && <LoginWeb /> }
    </div>
  );
}

export default Login;

/* Fonte para renderizar conforme o tamanho da tela:
  https://stackoverflow.com/questions/65274534/react-how-to-change-state-using-media-queries
*/