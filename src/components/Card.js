import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  border-radius: 30px;
  padding: 0.5rem;
  background-color: rgb(${({ theme }) => theme.colors.layout});
  box-shadow: 0px 5px 10px 2px rgba(${({ theme }) => theme.colors.layout}, 0.5);
  row-gap: 0.5rem;
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

const Bottom = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
`;

export default {
  Container,
  Top,
  Content,
  Bottom,
};
