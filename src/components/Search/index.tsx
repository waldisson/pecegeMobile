import React from 'react';
import colors from '../../styles';
// Styles
import {
  Container,
  SearchInput
} from './styles';

// Icons
import SearchIcon from '../../assets/icons/search';

// Props
interface SearchProps {

}

const Search: React.FC<SearchProps> = props => {
  const {} = props;


  return (
    <Container>
      <SearchIcon />
      <SearchInput 
        autoCorrect={false}
        underlineColorAndroid="transparent"
        placeholder="Procurar"
        placeholderTextColor={colors.darkLight}
      />
    </Container>
  );
};

export default Search;