'use client';
import { useState } from 'react';
import { CreateLayout } from './ui/create-layout';
import {
  CreateMethodLayout,
  MethodType,
} from './ui/create-tabs/create-method-layout';
import { CreateMethodAi } from './ui/create-tabs/create-method-ai';
import { useGenerateAi } from './hooks/use-generate-ai';

export const Create = () => {
  const [method, setMethod] = useState<MethodType>('AI');
  const { loading, userPrompt, onChangePrompt, onGeneratePrompt } =
    useGenerateAi();

  return (
    <CreateLayout
      header={
        <>
          <h2 className="text-2xl font-semibold text-primary">
            Create New Email Template
          </h2>
          <p className="text-lg text-gray-600">
            Create email templates effortlessly with our AI-powered generator.
          </p>
        </>
      }
      content={
        <CreateMethodLayout
          method={method}
          setMethod={setMethod}
          blockAI={
            <CreateMethodAi
              button={{
                onClick: onGeneratePrompt,
                disabled: loading || !userPrompt,
              }}
              textArea={{
                value: userPrompt,
                onChange: onChangePrompt,
              }}
            />
          }
          blockScratch={<p>Scratch</p>}
        />
      }
    />
  );
};
