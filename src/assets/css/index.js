import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }
  
  h1, button {
    @import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');
    font-family: 'Quantico', sans-serif;
  }

  #root {
    max-width: 100wh;
    margin: 0 auto;
<<<<<<< HEAD
  }

  .fonter {
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:500&display=swap');
    font-family: 'M PLUS Rounded 1c', sans-serif;
=======
>>>>>>> 80a65b02e14dcec1be92850f209ba1a0e43cd2b1
  }
`;