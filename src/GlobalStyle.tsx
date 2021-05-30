import { Global, css } from "@emotion/react";

const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  .body-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = () => <Global styles={styles} />;
