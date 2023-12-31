import { Image } from '@/components/atoms/Image/Image';
import styled from 'styled-components';

const PATPageContainer = styled.div`
  height: 100%;
`;

const ThingsGetButton = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  width: auto;

  img {
    margin-right: 7px;
  }
`;

/* 스마트싱스 기기 있는 경우 */
const ThingsListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ThingsContainer = styled.div<{ $isOffline: boolean }>`
  background-color: transparent;
  border-radius: 22px;
  height: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme, $isOffline }) =>
    $isOffline ? 'transparent' : theme.color.white};
  position: relative;
  padding: 8px 8px 20px 18px;
`;

// offline 인 경우에만 위에 덮어씌움
const ThingsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white2};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  height: inherit;
  width: inherit;
`;

const ThingStatusWrapper = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 8px 0px 0px;
  border-top-right-radius: 22px;
`;

export {
  PATPageContainer,
  ThingsGetButton,
  ThingsListContainer,
  ThingsContainer,
  ThingsWrapper,
  ThingStatusWrapper,
};
