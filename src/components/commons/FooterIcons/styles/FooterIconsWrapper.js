import styled from 'styled-components';

const FooterIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 224px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.background.primary.color};

  padding-left: 45px;
  padding-right: 45px;
`;

FooterIconsWrapper.IconArea = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export default FooterIconsWrapper;
