import styles from "./page.module.scss";

const OrdersPage = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>Cancelled</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>On the way</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>Cancelled</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>On the way</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>Cancelled</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>On the way</td>
          </tr>
          <tr>
            <td>1234798798723231</td>
            <td>19/07/2023</td>
            <td>89.90</td>
            <td>Pepperoni, sausage, bell pepper, onion and mushroom</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
