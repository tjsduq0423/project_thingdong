import styled from 'styled-components';
import { RoomName } from '@/pages/Home/Home.styles';
import { Image } from '@/components/atoms/Image/Image';
import Modal from '@/components/molecules/Modal/Modal';
import { redFace } from '@/assets/images/friend/face-red.png';

export const FriendRoomName = styled(RoomName)`
  margin: 0;
  width: 100%;
  background-color: #00000000;
  color: white;
  border: 1px solid white;
`;

export const FriendRoomHeader = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  width: 90%;
  height: 56px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
`;

export const TempGuestbookBtnWrapper = styled.div`
  position: absolute;
  bottom: 320px;
  transform: translateX(-50%);
  left: 50%;
  width: 45%;
`;

export const BackButton = styled(Image)`
  /* position: absolute; */
  top: 4%;
  /* left: -20%; */
  transform: scale(60%);
  margin-right: 20px;
`;

export const GuestbookModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  background-color: #00000000;
  img {
    align-self: center;
  }
`;

export const WriteArea = styled.div`
  position: relative;
  top: -250px;
  width: 100%;
  text-align: start;
  padding: 3px;
`;

export const ContentArea = styled.div`
  height: 11rem;
`;

export const WriterArea = styled.div`
  text-align: end;
`;