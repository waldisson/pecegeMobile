import React from 'react';

// Styles
import {
  Container,
  TextTitle,
  PrimaryButton,
  PrimaryButtonText,
  DrawerContent,
  DrawerButtonContainer,
  DrawerIconAndTitle,
  DrawerIconCheck,
  DrawerButtonContent,
  DrawerButtonTitle,
  DrawerButtonDescription,
  DrawerIconChevron,
  OutlineButton,
  OutlineButtonText,
  RoundButton,
} from './styles';

// Icons
import Add from '../../assets/icons/add';
import ChevronRight from '../../assets/icons/chevronRight';

// Props
interface ButtonProps {
  variation: 'primary' | 'drawer' | 'outline' | 'round';
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const {title,subtitle, icon, variation, onPress} = props;

  const handleOnPress = () => {
    if (onPress !== undefined && onPress !== null) {
      onPress();
    }
  };

  return (
    <Container
      title={title}
      subtitle={subtitle}
      variation={variation}
      icon={icon}
      onPress={() => handleOnPress()}>
      {variation === 'primary' && 
        <>
          <PrimaryButton onPress={handleOnPress}>
            <PrimaryButtonText>Salvar</PrimaryButtonText>
          </PrimaryButton>
        </>
      }
      {variation === 'drawer' && (
        <>
          <DrawerContent onPress={handleOnPress}>
            <DrawerButtonContainer>
              <DrawerIconAndTitle>
                <DrawerIconCheck>
                  {icon}
                </DrawerIconCheck>
                <DrawerButtonContent>
                  <DrawerButtonTitle>{title}</DrawerButtonTitle>
                  <DrawerButtonDescription>
                    {subtitle}
                  </DrawerButtonDescription>
                </DrawerButtonContent>
              </DrawerIconAndTitle>
              <DrawerIconChevron>
                <ChevronRight />
              </DrawerIconChevron>
            </DrawerButtonContainer>
          </DrawerContent>
        </>
      )}
      {variation === 'outline' &&
        <>
        <OutlineButton onPress={handleOnPress}>
          <OutlineButtonText>Cancelar</OutlineButtonText>
        </OutlineButton>
      </>
      }
      {variation === 'round' &&
        <>
        <RoundButton onPress={handleOnPress}>
          <Add />
        </RoundButton>
        </>
      }
    </Container>
  );
};

export default Button;