import React, { useState } from 'react';
import {TextInputProps} from 'react-native';
import ArrowDownIcon from '../../assets/icons/arrowDown';
import colors from '../../styles';
import { Item, ItemSector } from '../../types/Item';

// Styles
import {
  Container,
  Label,
  InputContent,
  SelectContainer,
  SelectButton,
  SelectText,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectColorText,
} from './styles';

// colors select
export const colorSelect = [
  {
    id: 1,
    color: '#006FFD',
  },
  {
    id: 2,
    color: '#FCCA31',
  },
  {
    id: 3,
    color: '#F37F3A',
  },
  {
    id: 4,
    color: '#E02D3C',
  }
] 
const LevelPriority = [
  {
    id:1,
    priority: 'Alta prioridade'
  },
  {
    id:2,
    priority: 'Média prioridade'
  },{
    id:3,
    priority: 'Baixa prioridade'
  }
]
const LevelStatus = [
  {
    id:1,
    status: 'Concluida'
  },
  {
    id:2,
    status: 'Pendente'
  },{
    id:3,
    status: 'Em andamento'
  }
]


// Props
interface InputProps extends TextInputProps {
  mask?: 'cep' | 'currency' | 'phone';
  variation: 'none' | 'sector' | 'status' | 'priority' | 'color';
  label: string;
  placeholder?: string;
  setSectorSelect?: any;
  sectorSelect?: any;
  sectorList?:ItemSector[];
  sectors?: any;
  message?: string;
  ref?: React.RefObject<any>;
  inputMaskChange?: any;
}

const Input: React.FC<InputProps> = props => {
  const {label, placeholder,sectorList ,sectors, sectorSelect,setSectorSelect, variation} = props;

  const [openSector, setOpenSector] = useState(false);

  return (
    <Container 
      label={label}
      variation={variation}
    >
      
      {
        variation === 'none' &&
        <>
          <Label>{label}</Label>
          <InputContent
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.gray300}
            {...props} 
          />
        </>
      }
      {
        variation === 'sector' &&
        <>
          <SelectContainer>
            <Label>{label}</Label>
            <SelectButton onPress={()=> setOpenSector(!openSector)}>
                  <SelectText>{sectorSelect?.nameSector || placeholder}</SelectText>
              <ArrowDownIcon />
              
            </SelectButton>
            {
              openSector && (
                <SelectContent>
                  {
                    sectorList?.map((item)=>(
                      <SelectItem key={item.id} onPress={()=>{
                        setSectorSelect(item);
                        setOpenSector(false);
                      }}>
                        <SelectItemText>{item.nameSector }</SelectItemText>
                      </SelectItem>
                    ))
                  }
                
              </SelectContent>
              )
            }
          </SelectContainer>
        </>
      }
      {
        variation === 'status' &&
        <>
          <SelectContainer>
            <Label>{label}</Label>
            <SelectButton onPress={()=> setOpenSector(!openSector)}>
              <SelectText>{sectorSelect || placeholder}</SelectText>
              <ArrowDownIcon />
            </SelectButton>
            {
              openSector && (
                <SelectContent>
                  {
                    LevelStatus?.map((item)=>(
                      <SelectItem key={item.id} onPress={()=>{
                        setSectorSelect(item.status);
                        setOpenSector(false);
                      }}>
                        <SelectColorText>{item.status}</SelectColorText>
                      </SelectItem>
                    ))
                  }
                
              </SelectContent>
              )
            }
          </SelectContainer>
        </>
      }
      {
        variation === 'priority' &&
        <>
          <SelectContainer>
            <Label>{label}</Label>
            <SelectButton onPress={()=> setOpenSector(!openSector)}>
              <SelectText>{sectorSelect || placeholder}</SelectText>
              <ArrowDownIcon />
            </SelectButton>
            {
              openSector && (
                <SelectContent>
                  {
                    LevelPriority?.map((item)=>(
                      <SelectItem key={item.id} onPress={()=>{
                        setSectorSelect(item.priority);
                        setOpenSector(false);
                      }}>
                        <SelectColorText>{item.priority}</SelectColorText>
                        
                      </SelectItem>
                    ))
                  }
                
              </SelectContent>
              )
            }
          </SelectContainer>
        </>
      }
      {
        variation === 'color' &&
        <>
          <SelectContainer>
            <SelectButton onPress={()=> setOpenSector(!openSector)}>
              <SelectText>{sectorSelect || placeholder}</SelectText>
              <ArrowDownIcon />
            </SelectButton>
            {
              openSector && (
                <SelectContent>
                  {
                    colorSelect?.map((item)=>(
                      <SelectItem key={item.id} onPress={()=>{
                        setSectorSelect(item.color);
                        setOpenSector(false);
                      }}>
                        <SelectColorText>{item.color}</SelectColorText>
                      </SelectItem>
                    ))
                  }
                
              </SelectContent>
              )
            }
          </SelectContainer>
        </>
      }
    
  </Container>
  );
};

export default Input;