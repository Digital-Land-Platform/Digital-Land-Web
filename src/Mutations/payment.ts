import { gql } from '@apollo/client';

export const PAY_PROPERTY = gql`
  mutation PayProperty($paymentMethod: PaymentMethod!, $propertyId: String!, $transactionType: TransactionTypeEnum!) {
    createPayment(
      paymentData: { paymentMethod: $paymentMethod, propertyId: $propertyId, transactionType: $transactionType }
    ) {
      amount
      confirmed
      id
      transactionId
      transactionFee
      paymentMethod
      paymentDate
      notaryFee
    }
  }
`;
