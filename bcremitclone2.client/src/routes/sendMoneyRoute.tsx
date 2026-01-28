import type { RouteObject } from 'react-router'
import SendMoney from '../features/send-money/SendMoney';
import Step1 from '../features/send-money/components/Step1';
import Step2 from '../features/send-money/components/Step2';
import Step3 from '../features/send-money/components/Step3';
import Step4 from '../features/send-money/components/Step4';

const sendMoneyRoute: RouteObject[] = [
  {
    path: "send-money/:id",
    element: <SendMoney />,
    children: [
      {
        index: true,
        element: <Step1 />
      },
      {
        path: "transaction-summary",
        element: <Step2 />
      },
      {
        path: "security-acknowledgement",
        element: <Step3 />
      },
      {
        path: "confirm-payment",
        element: <Step4 />
      }
    ]
  }

]

export default sendMoneyRoute;