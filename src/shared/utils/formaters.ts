export const formateValue = (
  value: string | number
): { formatedValue: number; unit: string | null } => {
  if (typeof value === 'number')
    return {
      formatedValue: value,
      unit: null,
    };

  if (value.includes('%')) {
    return {
      formatedValue: +value.replace('%', ''),
      unit: '%',
    };
  }
  if (value.includes('px')) {
    return {
      formatedValue: +value.replace('px', ''),
      unit: 'px',
    };
  }
  return {
    formatedValue: +value,
    unit: null,
  };
};
