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

export const formateTimestampToDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const dateString = date
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\./g, '.');

  const timeString = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return `${dateString} - ${timeString}`;
};
