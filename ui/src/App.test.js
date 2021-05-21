import { render, waitFor, screen } from '@testing-library/react';
import App from './App';

test('table renders with headers', async () => {
  render(<App />);
  await waitFor(() => screen.getByRole('table'))
  const uuidHeader = screen.getByText(/Uuid/g);
  expect(uuidHeader).toBeInTheDocument();
  const nameHeader = screen.getByText(/Name/g);
  expect(nameHeader).toBeInTheDocument();
  const emailHeader = screen.getByText(/Email/g);
  expect(emailHeader).toBeInTheDocument();
  const requestedAmountHeader = screen.getByText(/Requested Amount/g);
  expect(requestedAmountHeader).toBeInTheDocument();
  const paymentAmountHeader = screen.getByText(/Payment Amount/g);
  expect(paymentAmountHeader).toBeInTheDocument();
  const paymentMethodHeader = screen.getByText(/Payment Method/g);
  expect(paymentMethodHeader).toBeInTheDocument();
  const initiatePaymentHeader = screen.getByText(/Initiate Payment/g);
  expect(initiatePaymentHeader).toBeInTheDocument();
});
