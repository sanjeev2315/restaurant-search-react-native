//import liraries
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


// create a component
const SearchBar = ({ searchText, onSearch, searchApi }) => {

	return (
		<View style={styles.searchStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalized="none"
				autoCorrect={false}
				value={searchText}
				onChangeText={(newText) => onSearch(newText)}
				placeholder="search" style={styles.inputStyle}
				onEndEditing={() => { searchApi() }} >
			</TextInput >
		</View >
	);
};

// define your styles
const styles = StyleSheet.create({
	searchStyle: {
		backgroundColor: '#F0EEEE',
		height: 40,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginVertical: 10
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 30,
		alignSelf: 'center',
		marginHorizontal: 10
	}

});

//make this component available to the app
export default SearchBar;
