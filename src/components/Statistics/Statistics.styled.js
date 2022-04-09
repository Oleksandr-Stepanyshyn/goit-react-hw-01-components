import styled from "@emotion/styled";

export const StatData = styled.section`
  width: 400px;
  margin: 0 auto;
  text-align:center;
  color: #76777a;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 24px;
  padding: 12px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8f9194;
`;

export const StatItem = styled.li`
  flex-basis: calc( 100% / 5 );
  color: #ffffff;
  border: 1px solid grey;
  padding: 8px;

  >:first-child {
    font-size: 14px;
    display: block;
    text-align:center;
  }

  >:last-child {
    display: block;
    font-size: 20px;
    margin-top: 8px;
  }
`;