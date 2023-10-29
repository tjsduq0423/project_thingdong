import { useLocation, useNavigate } from 'react-router-dom';
import {
  BottomNavContainer,
  BottomNavWrpper,
} from '@/components/molecules/BottomNavBar/BottomNavBar.styles';
import { Image } from '@/components/atoms/Image/Image';
import { CHILDREN_PATH } from '@/constants/path';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickPath = location.pathname;

  const changePath = (path: keyof typeof CHILDREN_PATH) => {
    navigate(CHILDREN_PATH[path]);
  };

  const srcs = Object.keys(CHILDREN_PATH) as Array<keyof typeof CHILDREN_PATH>;

  return (
    <BottomNavContainer>
      <BottomNavWrpper>
        {srcs.map(src => {
          let imageSrc = src.toLowerCase();

          if (onClickPath === '/' && imageSrc === 'home') {
            imageSrc = 'home-activate';
          }

          if (onClickPath === `/${imageSrc}`) {
            imageSrc = `${imageSrc}-activate`;
          }
          return (
            <Image
              key={src}
              src={
                require(`@/assets/images/bottomNavBar/${imageSrc}.png`).default
              }
              onClick={() => changePath(src)}
              width={3}
              height={3}
            ></Image>
          );
        })}
      </BottomNavWrpper>
    </BottomNavContainer>
  );
};

export default BottomNavBar;