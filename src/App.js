import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// const animation = keyframes
//   0%{
//     transform: rotate(0deg);
//     border-radius: 0px;
//   }
//   50%{
//     transform: rotate(360deg);
//     border-radius: 100px;
//   }
//   100%{
//     transform: rotate(0deg);
//     border-radius: 0px;
//   }
// `;

// const Emogi = styled.div`
//   font-size: 36px;
// `

// const Box = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 200px;
//   width: 200px;
//   background-color: tomato;
//   animation: ${animation} 5s linear infinite;
//   align-items: center;

//   ${Emogi}{
//     font-size: 20px;
//     &:active{
//       opacity: 0;
//     }
//   }
// `;

// const Circle = styled(Box)`
//   border-radius: 50px;
// `
// const Btn = styled.button`
//   background-color: blue;
//   margin-left: 50px;
//   height: 30px;
//   width: 120px;
//   color: white;
// `;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;




function App() {
  return (
    <Wrapper>
      {/* <Box>
        <Emogi>ㅎ</Emogi>
      </Box>
      <Circle />

      <Btn as="a" href="/">Login</Btn> */}
    <Title>하이</Title>

   
    </Wrapper>
  );
}

export default App;
