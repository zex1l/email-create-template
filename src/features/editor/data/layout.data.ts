import {
  Columns2,
  Columns3,
  Columns4,
  RectangleHorizontal,
  type LucideProps,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { SidebarElementComponent } from './component.data';

export type TypeElement = 'column' | 'button' | 'text' | 'image' | 'divider';

export type ComponentTypeInLayout = Omit<SidebarElementComponent, 'icon'> & {
  icon: null;
};

export type SidebarElementLayout = {
  label: string;
  type: TypeElement;
  numberOfColumn: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  group: 'component' | 'layout';
  [key: number]: ComponentTypeInLayout;
};

export const sidebarElementsLayout: SidebarElementLayout[] = [
  {
    label: 'Column',
    type: 'column',
    numberOfColumn: 1,
    icon: RectangleHorizontal,
    group: 'layout',
  },
  {
    label: 'Column 2',
    type: 'column',
    numberOfColumn: 2,
    icon: Columns2,
    group: 'layout',
  },
  {
    label: 'Column 3',
    type: 'column',
    numberOfColumn: 3,
    icon: Columns3,
    group: 'layout',
  },
  {
    label: 'Column 4',
    type: 'column',
    numberOfColumn: 4,
    icon: Columns4,
    group: 'layout',
  },
];
