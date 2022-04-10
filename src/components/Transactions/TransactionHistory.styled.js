import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
  margin: 20px auto;
  text-align: center;
  color: #606160;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
`;

export const TableHeader = styled.thead`
  background-color: #6bc7c2;
  text-transform: uppercase;
  color: #ffffff;
`;

export const TableBody = styled.tbody`
>:nth-child(2n) {
  background-color: #e1e8e8;
}
`;

export const TableRow = styled.tr`
`;

export const TableData = styled.td`
  min-width: 240px;
  padding: 12px;
`;
