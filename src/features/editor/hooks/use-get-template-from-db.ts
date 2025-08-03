import { useConvex, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useEmailTemplate } from '@/shared/store/email-template.store';
import { CanvasItemsType } from './use-drag-and-drop-canvas';
import { useEffect } from 'react';

export const useGetTemplateFromDb = ({
  templateId,
}: {
  templateId: string;
}) => {
  const user = useQuery(api.users.getProfile);
  const convex = useConvex();

  const { setFullEmailTemplate } = useEmailTemplate();

  const getEmailTemplate = async () => {
    if (!templateId || !user?.email) return;

    const response = await convex.query(
      api.emailTemplate.getEmailTemplateById,
      {
        templateId: templateId,
        email: user.email,
      }
    );

    if (!response || !response.design) return setFullEmailTemplate([]);

    setFullEmailTemplate(response.design as CanvasItemsType[]);
  };

  useEffect(() => {
    getEmailTemplate();
  }, [templateId, user?.email]);
};
