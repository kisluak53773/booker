import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { searchStyles } from '../../styles';
import { type ISearchProps } from '../../types';

export const Search: FC<ISearchProps> = ({ setSearch, search }) => {
  return (
    <View style={searchStyles.searchContainer}>
      <TextInput
        style={searchStyles.searchInput}
        onChangeText={setSearch}
        placeholder="Enter a title"
        value={search}
      />
    </View>
  );
};
