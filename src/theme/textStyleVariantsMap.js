import { css } from 'styled-components';

const TextStyleVariantsMap = {
  logo: css`
    font-size: ${({ theme }) => theme.typographyVariants.logo.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.logo.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.logo.lineHeight};
  `,
  menuItem: css`
    font-size: ${({ theme }) => theme.typographyVariants.menuItem.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.menuItem.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.menuItem.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragrapy1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragrapy2.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph2.lineHeight};
  `,
  paragraph3: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph3.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph3.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph3.lineHeight};
  `,
};

export default TextStyleVariantsMap;
