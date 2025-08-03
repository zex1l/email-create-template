import { generateTemplateWithAi } from '@/shared/lib/google-ai';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  try {
    const response = await generateTemplateWithAi({ prompt });

    if (!response || !response.text) return NextResponse.json({});

    //Парсинг из Markdown
    const result = response.text
      .replace(/```json/g, '')
      .replace(/```javascript/g, '')
      .replace(/```/g, '')
      .replace(/^[\s\n\r]+/, '')
      .replace(/[\s\n\r]+$/, '')
      .trim();

    return NextResponse.json(JSON.parse(result));
  } catch (e) {
    return NextResponse.json(e);
  }
}
