export const getColor = (type: boolean, dis: boolean) => {
  if (!type && !dis) {
    return 'var(--color-blue)';
  }
  if (type && !dis) {
    return 'var(--color-red)';
  }
  if ((!type || type) && dis) {
    return 'var(--color-grey-border)';
  }
  return null;
};

export const getOpacity = (type: boolean) => {
  switch (type) {
    case false:
      return '1';
    case true:
      return '0.5';
    default:
      return null;
  }
};

export const onHoverGrey = (type: boolean, h: number) => {
  switch (type && h > 0) {
    case true:
      return 'none';
    default:
      return 'block';
  }
};

export const onHoverRed = (type: boolean, h: number) => {
  switch (type && h > 0) {
    case true:
      return 'block';
    default:
      return 'none';
  }
};
