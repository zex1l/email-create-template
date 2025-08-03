// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});
const tools = [
  {
    googleSearch: {},
  },
];
const config = {
  thinkingConfig: {
    thinkingBudget: -1,
  },
  tools,
  systemInstruction: [
    {
      text: `1. **Data Structure Information:**
   - You have two types of elements: 'component' and 'layout'
   - Layout elements have 'numberOfColumn' property (1, 2, 3, or 4 columns)
   - Each layout can contain components in numbered positions [0], [1], [2], etc.
   - Component types: 'button', 'text', 'image', 'divider'
   - Layout types: 'column' (with different column counts)
   - Write Meaning full text content with Emoji icons needed
  - Give response in JSON format only 
  - All fields icon need to set null
  - Images must match the subject of the request 
  - Images must be valid and show up
  - Images always has height and width in a percent

2. **Component Structure:**
   typescript
   // Component
   type SidebarElementComponent = {
     icon: any;
     label: string;
     type: 'button' | 'text' | 'image' | 'divider';
     content: string;
     url: string;
     style: CSSProperties;
     imageUrl?: string;
     alt?: string;
     group: 'component';
   }

   // Layout
   type SidebarElementLayout = {
     label: string;
     type: 'column';
     numberOfColumn: number;
     icon: ReactComponent;
     group: 'layout';
     [key: number]: ComponentTypeInLayout; // Components placed in numbered positions
   }

There Object template return we needed 
const data: CanvasItemsType[] = [
  {
    // Layout properties
    id: 1,
    label: '1 Column Layout',
    type: 'column',
    numberOfColumn: 1,
    icon: null,
    group: 'layout',

    // Component in position 0
    0: {
      id: 101,
      icon: null,
      label: 'Image',
      type: 'image',
      content: 'Full-width banner image of sakura in bloom.',
      imageUrl:
        'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Ветви сакуры в полном цвету',
      url: '',
      style: {
        padding: '0px',
        margin: '0px',
      },
      group: 'component',
    },
  },
  {
    // Layout properties
    id: 2,
    label: '1 Column Layout',
    type: 'column',
    numberOfColumn: 1,
    icon: null,
    group: 'layout',

    // Component in position 0
    0: {
      id: 102,
      icon: null,
      label: 'Text',
      type: 'text',
      content:
        '<h1>🌸 Мгновения нежности и сакуры 🌸</h1><p>Почувствуйте лёгкое дуновение весеннего ветерка, который доносит сладкий аромат цветущей сакуры. Это время обновления, хрупкой красоты и тихой радости. Пусть эти мгновения наполнят ваше сердце теплом и гармонией.</p>',
      url: '',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#333333',
        backgroundColor: '#FFF9FB',
        padding: '30px 20px',
        textAlign: 'center',
      },
      group: 'component',
    },
  },
  {
    // Layout properties
    id: 3,
    label: '2 Column Layout',
    type: 'column',
    numberOfColumn: 2,
    icon: null,
    group: 'layout',

    // Component in position 0
    0: {
      id: 103,
      icon: null,
      label: 'Text',
      type: 'text',
      content:
        '<h3>🌱 Время для мечты</h3><p>Когда природа просыпается, самое время строить новые планы и мечтать о прекрасном. Каждый нежный лепесток — это напоминание о том, что красота живёт в каждом моменте.</p>',
      url: '',
      style: {
        fontFamily: 'Georgia, serif',
        color: '#4E4E4E',
        backgroundColor: '#FFF9FB',
        padding: '20px',
      },
      group: 'component',
    },

    // Component in position 1
    1: {
      id: 104,
      icon: null,
      label: 'Text',
      type: 'text',
      content:
        '<h3>💌 Послание весны</h3><p>Это письмо — наше маленькое послание, вдохновлённое цветением сакуры. Желаем вам светлых дней, полных вдохновения и спокойствия. Наслаждайтесь этой прекрасной порой!</p>',
      url: '',
      style: {
        fontFamily: 'Georgia, serif',
        color: '#4E4E4E',
        backgroundColor: '#FFF9FB',
        padding: '20px',
      },
      group: 'component',
    },
  },
  {
    // Layout properties
    id: 4,
    label: '1 Column Layout',
    type: 'column',
    numberOfColumn: 1,
    icon: null,
    group: 'layout',

    // Component in position 0 (Divider)
    0: {
      id: 105,
      icon: null,
      label: 'Divider',
      type: 'divider',
      content: '',
      url: '',
      style: {
        borderTop: '2px solid #FADADD',
        margin: '20px 50px',
      },
      group: 'component',
    },
  },
  {
    // Layout properties
    id: 5,
    label: '1 Column Layout',
    type: 'column',
    numberOfColumn: 1,
    icon: null,
    group: 'layout',

    // Component in position 0 (Button)
    0: {
      id: 106,
      icon: null,
      label: 'Button',
      type: 'button',
      content: 'Навстречу весне ✨',
      url: '#',
      style: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: '#E5A4B4',
        padding: '15px 30px',
        borderRadius: '25px',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '10px',
      },
      group: 'component',
    },
  },
];`,
    },
  ],
};
const model = 'gemini-2.5-pro';

export async function generateTemplateWithAi({ prompt }: { prompt: string }) {
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  return response;
}
