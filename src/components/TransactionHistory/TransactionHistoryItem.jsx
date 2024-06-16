export const TransactionItem = ({ value }) => {
  const { type, amount, currency } = value;

  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};