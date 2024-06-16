import { TransactionItem } from "./TransactionHistoryItem";
import css from "./Transaction.module.css";
import clsx from "clsx";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.container}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map((item, ind) => {
          return (
            <tr
              key={item.id}
              className={clsx(ind % 2 === 0 ? css.tr : "transparent")}
            >
              <TransactionItem value={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};