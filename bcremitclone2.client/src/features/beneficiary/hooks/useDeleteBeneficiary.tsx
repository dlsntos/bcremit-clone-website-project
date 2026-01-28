/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from 'axios';
import api from 'api/axios';
interface DeleteResponse {
  success: boolean;
  message: string;
}
interface UseDeleteBeneficiaryResult {
  deleteBeneficiary: (id: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useDeleteBeneficiary = (): UseDeleteBeneficiaryResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteBeneficiary = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.delete<DeleteResponse>(`user/beneficiaries/${id}`);
      console.log(response.data);
    }
    catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Failed to delete beneficiary");
      } else {
        setError(err.message || "Failed to delete beneficiary");
      }
    }
    finally {
      setLoading(false);
    }
  }
  return { deleteBeneficiary, loading, error }

} 