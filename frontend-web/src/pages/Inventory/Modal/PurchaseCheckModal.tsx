import * as S from './PurchaseCheckModal.styles';
import Modal from '@/components/molecules/Modal/Modal';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import Button from '@/components/atoms/Button/Button';
import { modalOpenAtom, selectedItemAtom } from '@/states/inventoryModalStates';
import { useAtom } from 'jotai';
import { useBuyObject } from '@/apis/Inventory/Mutations/useBuyObject';
import { IMAGES } from '@/constants/images';

const PurchaseChek = () => {
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [selectedItem] = useAtom(selectedItemAtom);
  const onModalClose = () => {
    setModalOpen(false);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  const buyObjectMutation = useBuyObject();
  const handleBuyObject = (userObjectId?: number) => {
    if (userObjectId === undefined) {
      return;
    }
    buyObjectMutation.mutate(userObjectId);
    setModalOpen(false);
  };
  return (
    <Modal height={19.6} onClose={onModalClose} isOpen={modalOpen}>
      <Text size="body2" fontWeight="extraBold">
        선택하신 가구는 다음과 같아요!
      </Text>
      <S.ItemWrapper>
        <Image
          src={selectedItem?.objectImagePath}
          $unit={'px'}
          width={80}
          height={80}
        />
        <S.ThingWrapper>
          <Image
            src={IMAGES.THING_STORY.THING_ICON}
            $unit={'px'}
            width={31}
            height={31}
          />
          <Text
            size="subtitle2"
            fontWeight="extraBold"
            color="grey1"
            $marginLeft="5px"
          >
            {selectedItem?.objectThing}
          </Text>
        </S.ThingWrapper>
      </S.ItemWrapper>
      <Text size="body2" fontWeight="bold">
        구매하시겠어요?
      </Text>
      <S.ButtonWrapper>
        <Button option={'ghost'} size={'small'} onClick={handleCancel}>
          취소
        </Button>
        <Button
          option={'activated'}
          size={'small'}
          onClick={() => handleBuyObject(selectedItem?.userObjectId)}
        >
          확인
        </Button>
      </S.ButtonWrapper>
    </Modal>
  );
};

export default PurchaseChek;
