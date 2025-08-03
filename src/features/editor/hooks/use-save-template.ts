import { useEmailTemplate } from '@/shared/store/email-template.store';
import { useConvex, useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useState } from 'react';
import { toast } from 'sonner';

export const useSaveTemplate = ({ templateId }: { templateId: string }) => {
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const updateTemplateMutation = useMutation(
    api.emailTemplate.updateEmailTemplate
  );
  const { emailTemplate } = useEmailTemplate();

  const onSaveTemplate = async () => {
    if (!emailTemplate) throw new Error('Template is empty');

    setLoadingUpdate(true);
    try {
      await updateTemplateMutation({
        templateId,
        design: emailTemplate,
      });
      toast.success('Template saved successfully');
      setLoadingUpdate(false);
    } catch (e) {
      toast.error('Failed to save template');
      setLoadingUpdate(false);
    }
  };

  return {
    onSaveTemplate,
    loadingUpdate,
  };
};
