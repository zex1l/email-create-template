import { twi } from 'tw-to-css';

interface ClassStyleMap {
  [key: string]: string;
}

// const createTailwindToCssMap = (): ClassStyleMap => {
//   const map: ClassStyleMap = {};

//   // Colors
//   const colors = {
//     white: '#ffffff',
//     black: '#000000',
//     'gray-400': '#9ca3af',
//     'red-500': '#ef4444',
//     'blue-500': '#3b82f6',
//     'green-500': '#10b981',
//     'gray-100': '#f3f4f6',
//     'gray-200': '#e5e7eb',
//     'gray-300': '#d1d5db',
//     primary: '#007bff', // ваш primary цвет
//   };

//   // Generate color classes
//   Object.entries(colors).forEach(([name, value]) => {
//     map[`bg-${name}`] = `background-color: ${value}`;
//     map[`text-${name}`] = `color: ${value}`;
//     map[`border-${name}`] = `border-color: ${value}`;
//   });

//   // Spacing (rem values)
//   const spacing = {
//     '0': '0px',
//     '0.5': '0.125rem',
//     '1': '0.25rem',
//     '1.5': '0.375rem',
//     '2': '0.5rem',
//     '2.5': '0.625rem',
//     '3': '0.75rem',
//     '3.5': '0.875rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '7': '1.75rem',
//     '8': '2rem',
//     '9': '2.25rem',
//     '10': '2.5rem',
//     '11': '2.75rem',
//     '12': '3rem',
//   };

//   Object.entries(spacing).forEach(([key, value]) => {
//     map[`p-${key}`] = `padding: ${value}`;
//     map[`m-${key}`] = `margin: ${value}`;
//     map[`pt-${key}`] = `padding-top: ${value}`;
//     map[`pb-${key}`] = `padding-bottom: ${value}`;
//     map[`pl-${key}`] = `padding-left: ${value}`;
//     map[`pr-${key}`] = `padding-right: ${value}`;
//     map[`mt-${key}`] = `margin-top: ${value}`;
//     map[`mb-${key}`] = `margin-bottom: ${value}`;
//     map[`ml-${key}`] = `margin-left: ${value}`;
//     map[`mr-${key}`] = `margin-right: ${value}`;
//   });

//   // Other common classes
//   map['border'] = 'border: 1px solid';
//   map['border-dashed'] = 'border-style: dashed';
//   map['border-solid'] = 'border-style: solid';
//   map['flex'] = 'display: flex';
//   map['relative'] = 'position: relative';
//   map['absolute'] = 'position: absolute';
//   map['fixed'] = 'position: fixed';
//   map['items-center'] = 'align-items: center';
//   map['items-start'] = 'align-items: flex-start';
//   map['items-end'] = 'align-items: flex-end';
//   map['justify-center'] = 'justify-content: center';
//   map['justify-between'] = 'justify-content: space-between';
//   map['justify-start'] = 'justify-content: flex-start';
//   map['justify-end'] = 'justify-content: flex-end';
//   map['cursor-pointer'] = 'cursor: pointer';
//   map['cursor-default'] = 'cursor: default';
//   map['text-center'] = 'text-align: center';
//   map['text-left'] = 'text-align: left';
//   map['text-right'] = 'text-align: right';
//   map['font-bold'] = 'font-weight: bold';
//   map['font-normal'] = 'font-weight: normal';
//   map['font-semibold'] = 'font-weight: 600';
//   map['w-full'] = 'width: 100%';
//   map['h-full'] = 'height: 100%';
//   map['w-auto'] = 'width: auto';
//   map['h-auto'] = 'height: auto';
//   map['rounded'] = 'border-radius: 0.25rem';
//   map['rounded-lg'] = 'border-radius: 0.5rem';
//   map['rounded-xl'] = 'border-radius: 0.75rem';
//   map['rounded-2xl'] = 'border-radius: 1rem';
//   map['rounded-full'] = 'border-radius: 9999px';
//   map['block'] = 'display: block';
//   map['inline'] = 'display: inline';
//   map['inline-block'] = 'display: inline-block';
//   map['hidden'] = 'display: none';
//   map['text-sm'] = 'font-size: 0.875rem';
//   map['text-base'] = 'font-size: 1rem';
//   map['text-lg'] = 'font-size: 1.125rem';
//   map['text-xl'] = 'font-size: 1.25rem';
//   map['text-2xl'] = 'font-size: 1.5rem';

//   return map;
// };

export const tailwindToCss = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const processElement = (element: Element) => {
    if (element.hasAttribute('class')) {
      const classes = element.getAttribute('class') || '';
      const classList = classes
        .split(' ')
        .filter((cls) => cls && cls !== 'false' && cls.trim() !== '');

      if (classList.length > 0) {
        const styles: string[] = [];

        classList.forEach((cls) => {
          if (twi(cls)) {
            styles.push(twi(cls));
          }
        });

        const existingStyle = element.getAttribute('style') || '';
        const combinedStyles = existingStyle
          ? `${styles} ${existingStyle}`
          : styles.join('');

        element.removeAttribute('class');
        if (combinedStyles.trim()) {
          element.setAttribute('style', combinedStyles.trim());
        }
      } else {
        element.removeAttribute('class');
      }
    }
    Array.from(element.children).forEach(processElement);
  };

  Array.from(doc.children).forEach(processElement);
  return doc.documentElement.outerHTML;
};

export const tailwindToCssChunked = (html: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = tailwindToCss(html);
      resolve(result);
    }, 0);
  });
};
