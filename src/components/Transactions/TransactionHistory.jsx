import PropTypes from 'prop-types';
import { TransactionsTable, TableHeader, TableBody, TableRow, TableData } from './TransactionHistory.styled.js';

export const TransactionHistory = ({transactions}) => {
  return (
    <TransactionsTable>
      <TableHeader>
        <TableRow>
          <TableData>Type</TableData>
          <TableData>Amount</TableData>
          <TableData>Currency</TableData>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactions.map(({id, type, amount, currency}) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          )
        })}
      </TableBody>
    </TransactionsTable>
  )
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}