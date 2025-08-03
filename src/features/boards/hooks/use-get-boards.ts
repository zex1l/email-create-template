import { useConvex, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useEffect, useState } from "react";

export const useGetBoards = () => {
  const [loadingBoards, setLoadingBoards] = useState(false)
  const user = useQuery(api.users.getProfile);



  const emailTemplates = useQuery(api.emailTemplate.getEmailTemplates, { email: user?.email || '' });

  return {
    emailTemplates
  }
}