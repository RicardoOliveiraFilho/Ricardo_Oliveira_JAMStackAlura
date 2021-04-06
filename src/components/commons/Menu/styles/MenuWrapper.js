import styled from 'styled-components';

const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  border-top: 3px solid ${({ theme }) => theme.colors.borders.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.borders.primary};
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  font-size: 72px;
`;

MenuWrapper.RightSide = styled.div`
  padding: 12px;
  margin: 0;
  order: 2;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    margin-left: 20px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.links.primary};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default MenuWrapper;
