// pages/ReturnPolicy.js
import React from 'react';
import './ReturnPolicy.css'; // Optional: Custom styles for Return Policy page

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <h1>Return Policy</h1>
      <p>We want you to be completely satisfied with your purchase. If for any reason you are not happy with your furniture, please read our return policy below:</p>
      
      <h2>1. General Policy</h2>
      <p>We accept returns within 30 days of the delivery date. The furniture must be in its original condition and packaging to be eligible for a return. Please note that custom orders and clearance items are non-returnable.</p>
      
      <h2>2. Return Process</h2>
      <ol>
        <li>Contact our customer service team at <a href="mailto:support@example.com">support@example.com</a> to initiate a return request.</li>
        <li>Provide your order number and details of the item you wish to return.</li>
        <li>Our team will provide you with a return authorization number and instructions for returning the item.</li>
        <li>Pack the item securely in its original packaging and include a copy of your receipt.</li>
        <li>Ship the item to the address provided by our customer service team. Return shipping costs are the responsibility of the customer unless the return is due to a mistake on our part.</li>
      </ol>
      
      <h2>3. Refunds and Exchanges</h2>
      <p>Once we receive and inspect the returned item, we will process your refund or exchange within 7-10 business days. Refunds will be issued to the original payment method used at the time of purchase.</p>
      
      <h2>4. Damaged or Defective Items</h2>
      <p>If you receive a damaged or defective item, please contact us immediately at <a href="mailto:support@example.com">support@example.com</a>. We will arrange for a replacement or refund at no additional cost to you.</p>
      
      <h2>5. Contact Us</h2>
      <p>If you have any questions about our return policy or need assistance with a return, please contact us at <a href="mailto:support@example.com">support@example.com</a> or call us at (123) 456-7890.</p>
    </div>
  );
};

export default ReturnPolicy;
