import React from 'react';

// Styles
import {
  Container,
  SearchInput
} from './styles';

// Icons
import SearchIcon from '../../assets/icons/search';
import colors from '../../styles';

// Props
interface SearchProps {

}

const Search: React.FC<SearchProps> = props => {
  const {} = props;


  return (
    <Container>
      <SearchIcon />
      <SearchInput 
        placeholder="Procurar"
        placeholderTextColor={colors.darkLight}
      />
    </Container>
  );
};

export default Search;