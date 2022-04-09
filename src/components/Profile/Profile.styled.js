import styled from "@emotion/styled";

export const UserCard = styled.div`
  width: 360px;
  margin: 20px auto;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
`;

export const Description = styled.div`
  padding: 32px;
`;

export const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
  margin: 40px auto;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-: 8px;
  `;

export const Tag = styled.p`
  margin-top: 12px;
  color: #757575;
  `;

export const Location = styled.p`
margin-top: 12px;
color: #757575;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f4f7;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 16px;
  border: 1px solid #dcdfe3;

  >:first-child {
    color:#757575;
  };
  >:last-child{
    margin-top: 12px;
    font-weight: 700;
  };
`;