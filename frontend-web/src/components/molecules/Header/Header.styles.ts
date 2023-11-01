import styled from 'styled-components';

const HeaderContainer = styled.div<{ $marginBottom: number }>`
  display: flex;
  width: 100%;
  min-height: 2.5rem;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}rem`};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  img:first-child {
    margin-right: 1rem;
  }
`;

export { HeaderContainer, HeaderWrapper };
