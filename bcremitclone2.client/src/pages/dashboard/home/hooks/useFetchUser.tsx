import api from 'api/axios';
import { useState, useEffect } from "react";

interface UserId {
  id: string,
}
interface UserName {
  firstName: string,
  middleName: string,
  lastName: string,
  fullName: string,
  initials: string,
}
interface ErrorState {
  message: string;
  details?: unknown;
};

function useFetchUser () {
  const [userProfile, setUserProfile] = useState<
    {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    fullName: string,
    initials: string,
    } | null>(null);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const [idResponse, nameResponse] = await Promise.all(
          [
            api.get<UserId>("/user/me"),
            api.get<UserName>("user/user-information/me"),
          ]
        );

        const profileData = {
          id: idResponse.data.id,
          firstName: nameResponse.data.firstName,
          middleName: nameResponse.data.middleName,
          lastName: nameResponse.data.lastName,
          fullName: [nameResponse.data.firstName, nameResponse.data.middleName, nameResponse.data.lastName]
            .filter((name): name is string => !!name)
            .join(" ")
            .toUpperCase(),
          initials: nameResponse.data.firstName.slice(0, 1).toUpperCase(),
        }

        setUserProfile(profileData);
      }
      catch (err: unknown) {
        setError({ message: "request cancelled", details: err });
        setUserProfile(null);
      }
      finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [])
  return { userProfile, isLoading, error};
};

export default useFetchUser;