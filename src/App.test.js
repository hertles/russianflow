import { render, screen } from '@testing-library/react';
import App from './App';
import {TestHoc} from "./utils/hoc/TestHoc";

test('renders app',  () => {
  render(TestHoc(<App />));
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});
