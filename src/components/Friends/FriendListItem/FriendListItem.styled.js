import styled from "@emotion/styled";

export const Friend = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
`;

export const IsOnline = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({isOnline}) => isOnline ? '#00ff00' : '#ff0000'};
  border-radius: 50%;
  margin-left: 20px;
`;

export const Foto = styled.img`
  margin-left: 20px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-size: 24px;
`;