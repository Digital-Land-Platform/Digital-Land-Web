import { gql } from '@apollo/client';

export const PAY_PROPERTY = gql`
  mutation CreatePayment($propertyId: String!, $transactionType: TransactionType!, $paymentMethod: PaymentMethod!) {
    createPayment(
      paymentData: { propertyId: $propertyId, transactionType: $transactionType, paymentMethod: $paymentMethod }
    ) {
      amount
      confirmed
      id
      paymentDate
      paymentMethod
      transactionFee
      transactionId
    }
  }
`;
