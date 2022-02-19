import React, { Fragment, useState, useEffect } from "react";
import GlobalTheme from '../componentes/Global';
import { lightTheme, darkTheme } from '../componentes/Theme';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";

export const ButtonTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  
  const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  `;

  const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
  `;

  const ButtonChange = styled.button`
            display: block;
            border: none;
            background-color: ${({ theme }) => theme.titles};
            border-radius: 12px;
            width: 175px;
            height: 40px;
            padding: 2px;
            cursor: pointer;
            color: white;
            font-size: 16px;
            align-items: center;
  `;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
       <Fragment>
        <GlobalTheme/> 
        <Button>
          <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
        </Button>
        </Fragment>
    </ThemeProvider>
  );


}