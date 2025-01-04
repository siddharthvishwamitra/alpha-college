window.pageContent = `
   <div class="pay-form">
    <h2>Pay Fee Online</h2>
    <form action="#" method="POST">
      <label for="student-name">Student Name:</label>
      <input type="text" id="student-name" name="student-name" required>

      <label for="student-id">Student ID:</label>
      <input type="text" id="student-id" name="student-id" required>

      <label for="course">Course:</label>
      <select id="course" name="course" required>
        <option value="engineering">Engineering</option>
        <option value="science">Science</option>
        <option value="commerce">Commerce</option>
      </select>

      <label for="fee-amount">Fee Amount (₹):</label>
      <input type="number" id="fee-amount" name="fee-amount" required>

      <label for="payment-method">Payment Method:</label>
      <select id="payment-method" name="payment-method" required>
        <option value="credit-card">Credit Card</option>
        <option value="debit-card">Debit Card</option>
        <option value="net-banking">Net Banking</option>
        <option value="upi">UPI</option>
      </select>

      <label for="transaction-id">Transaction ID:</label>
      <input type="text" id="transaction-id" name="transaction-id" required>

      <button type="submit" disabled>Pay Fee</button>
    </form>
  </div>

  <style>
    .pay-form {
      max-width: 800px;
      margin: 0 auto;
      padding: 8px;
    }

    .pay-form h2 {
      text-align: center;
      padding-bottom: 5px;
    }

    .pay-form label {
      font-size: 14px;
      font-weight: bold;
      color: #333;
      margin-top: 10px;
      display: block;
    }

    .pay-form input,
    .pay-form select,
    .pay-form button {
      width: 100%;
      padding: 10px;
      margin: 8px 0 16px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      outline-color: black;
      background: #ffffff;
    }

    .pay-form button {
      background-color: #6610F2;
      color: white;
      border: none;
      cursor: pointer;
    }

    .pay-form button:hover {
      background-color: #4b08c9;
    }
  </style>
`;

window.pageTitle = "Pay Fee";