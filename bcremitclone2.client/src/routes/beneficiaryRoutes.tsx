import type { RouteObject } from 'react-router'

import CreateBeneficiary from 'features/beneficiary/create-beneficiary/CreateBeneficiary';
import Step1 from 'features/beneficiary/create-beneficiary/components/Step1';
import Step2 from 'features/beneficiary/create-beneficiary/components/Step2';
import BeneficiaryDetails from '../features/beneficiary/beneficiary-details/BeneficiaryDetails';
import UpdateBeneficiary from '../features/beneficiary/update-beneficiary/UpdateBeneficiary';
import BeneficiaryBankDetails from '../features/beneficiary/create-beneficiary/components/additional-forms/BeneficiaryBankDetails';
import BeneficiaryMobileWallet from '../features/beneficiary/create-beneficiary/components/additional-forms/BeneficiaryMobileWallet';

const beneficiaryRoutes: RouteObject[] = [
  {
    path: 'create-beneficiary',
    element: <CreateBeneficiary />,
    children: [
      {
        index: true,
        element: <Step1/>
      },
      {
        path: "step-2",
        element: <Step2 />,
      },
      {
        path: "bank-details",
        element: <BeneficiaryBankDetails />
      },
      {
        path: "mobile-wallet-details",
        element: <BeneficiaryMobileWallet />
      },
    ]
  },
  {
    path: 'beneficiary-details/:id',
    element: <BeneficiaryDetails />
  },
  {
    path: 'update-beneficiary/:id',
    element: <UpdateBeneficiary/>
  }
]

export default beneficiaryRoutes;