'use client';
import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const useGenerateAi = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const user = useQuery(api.users.getProfile);
  const saveTemplateToDb = useMutation(api.emailTemplate.SaveTemplate);

  const router = useRouter();

  const onChangePrompt = (prompt: string) => {
    setUserPrompt(prompt);
  };

  const onGeneratePrompt = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const result = await axios.post('/api/ai-email-generate', {
        prompt: userPrompt,
      });

      const templateId = uuidv4();

      const response = await saveTemplateToDb({
        templateId,
        design: result.data,
        email: user.email,
        description: userPrompt,
      });

      setLoading(false);
      router.push(`/boards/editor/${templateId}`);

      toast.success('Template saved successfully');
    } catch (e) {
      setLoading(false);
      console.warn(e);
    }
  };

  return { userPrompt, onChangePrompt, loading, onGeneratePrompt };
};
