import {
  Image,
  RectangleEllipsis,
  SquareSplitVertical,
  TextSelectionIcon,
} from 'lucide-react';
import { CSSProperties } from 'react';
import { TypeElement } from './layout.data';

export type ComponentFieldType =
  | 'icon'
  | 'label'
  | 'type'
  | 'content'
  | 'url'
  | 'style'
  | 'outerStyle'
  | 'imageUrl'
  | 'alt';

export type SidebarElementComponent = {
  icon: any;
  label: string;
  type: TypeElement;
  content: string;
  url: string;
  style: CSSProperties;
  outerStyle?: string;
  imageUrl?: string;
  alt?: string;
  group: 'component' | 'layout';
};

export const sidebarElementsComponent: SidebarElementComponent[] = [
  {
    icon: RectangleEllipsis,
    label: 'Button',
    type: 'button',
    content: 'Button component',
    url: '',
    style: {
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px',
      width: 'auto',
      height: '40px',
      textAlign: 'center',
      fontSize: '16px',
      borderRadius: '10px',
      fontWeight: 'normal',
      cursor: 'pointer',
    },
    outerStyle: 'flex items-center justify-center',
    group: 'component',
  },
  {
    icon: TextSelectionIcon,
    label: 'Text',
    type: 'text',
    content: 'Text component',
    url: '',
    style: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '10px',
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: 'normal',
    },
    group: 'component',
  },
  {
    icon: Image,
    label: 'Image',
    type: 'image',
    content: 'Image component',
    imageUrl: '/placeholder-img.png',
    alt: 'Image',
    url: '',
    style: {
      backgroundColor: '#fff',
      padding: '10px',
      height: '50%',
      width: '70%',
      borderRadius: '10px',
    },
    outerStyle: 'flex items-center justify-start bg-white',
    group: 'component',
  },
  {
    icon: SquareSplitVertical,
    label: 'Divider',
    type: 'divider',
    content: 'Divider component',
    url: '',
    style: {
      width: '100%',
      height: '1px',
      backgroundColor: '#ccc',
    },
    group: 'component',
  },
];
