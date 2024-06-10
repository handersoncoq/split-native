import styled from "styled-components/native";

export const AppWrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  margin-top: -48px; // Equivalent to -3em
  box-sizing: border-box;
`;

export const FrontPageHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 24px; // Equivalent to 1.5em
`;

export const FrontPageTitle = styled.Text`
  font-size: 48px; // Equivalent to 3em
  padding-bottom: 0;
`;

export const FrontPageSubtitle = styled.Text`
  color: #1da1f2;
`;

export const Sup = styled.Text`
  color: #1da1f2;
  font-size: 10px; // Equivalent to x-small
`;

export const GlobalStyleContainer = styled.View`
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
`;

export const H1 = styled.Text`
  padding: 8px; // Equivalent to 0.5em
  margin: 0;
`;

export const H2 = styled(H1)``;
export const H3 = styled(H1)``;
export const H4 = styled(H1)``;

export const P = styled.Text`
  line-height: 24px; // Assuming a base font size of 16px
`;
