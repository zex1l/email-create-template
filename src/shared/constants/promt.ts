import dedent from 'dedent';

export const Promt = {
  AI_TEMPLATE_PROMT: dedent`### Instructions:
1. **Data Structure Information:**
   - You have two types of elements: 'component' and 'layout'
   - Layout elements have 'numberOfColumn' property (1, 2, 3, or 4 columns)
   - Each layout can contain components in numbered positions [0], [1], [2], etc.
   - Component types: 'button', 'text', 'image', 'divider'
   - Layout types: 'column' (with different column counts)

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
   }`,
};
