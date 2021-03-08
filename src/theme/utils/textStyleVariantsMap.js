import { css } from 'styled-components';

const TextStyleVariantsMap = {
  titleMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.titleMD.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.titleMD.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.titleMD.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.titleXS.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.titleXS.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.subTitle.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.subTitle.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,
  logoMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.logoMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.logoMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.logoMD.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.logoMD.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.logoMD.lineHeight};
  `,
  logoXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.logoXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.logoXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.logoXS.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.logoXS.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.logoXS.lineHeight};
  `,
  navbarMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.navbarMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.navbarMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.navbarMD.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.navbarMD.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.navbarMD.lineHeight};
  `,
  navbarXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.navbarXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.navbarXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.navbarXS.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.navbarXS.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.navbarXS.lineHeight};
  `,
  sectionTitleMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.sectionTitleMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.sectionTitleMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.sectionTitleMD.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.sectionTitleMD.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.sectionTitleMD.lineHeight};
  `,
  sectionTitleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.sectionTitleXS.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.sectionTitleXS.lineHeight};
  `,
  cardTitleMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.cardTitleMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.cardTitleMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.cardTitleMD.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.cardTitleMD.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.cardTitleMD.lineHeight};
  `,
  cardTitleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.cardTitleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.cardTitleXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.cardTitleXS.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.cardTitleXS.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.cardTitleXS.lineHeight};
  `,
  destaqueMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.destaqueMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.destaqueMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.destaqueMD.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.destaqueMD.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.destaqueMD.lineHeight};
  `,
  destaqueXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.destaqueXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.destaqueXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.destaqueXS.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.destaqueXS.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.destaqueXS.lineHeight};
  `,
  cardText: css`
    font-size: ${({ theme }) => theme.typographyVariants.cardText.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.cardText.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.cardText.fontStyle};
    text-transform: ${({ theme }) => theme.typographyVariants.cardText.textTransform};
    line-height: ${({ theme }) => theme.typographyVariants.cardText.lineHeight};
  `,
  textInvokeModalMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.textInvokeModalMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.textInvokeModalMD.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.textInvokeModalMD.fontStyle};
    line-height: ${({ theme }) => theme.typographyVariants.textInvokeModalMD.lineHeight};
  `,
  textInvokeModalXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.textInvokeModalXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.textInvokeModalXS.fontWeight};
    font-style: ${({ theme }) => theme.typographyVariants.textInvokeModalXS.fontStyle};
    line-height: ${({ theme }) => theme.typographyVariants.textInvokeModalXS.lineHeight};
  `,
};

export default TextStyleVariantsMap;
