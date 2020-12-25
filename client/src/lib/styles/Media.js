import { css } from 'styled-components';

const sizes = {
  Desktop: 2560,
  LaptopL: 1440,
  Laptop: 1024,
  Tablet: 768,
  Mobile: 425,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
