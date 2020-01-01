//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import useResults from './hooks/useResults'
import ResultList from './ResultsList';


// create a component
const SearchScreen = () => {
	const [results, error, searchApi] = useResults()
	const [term, setTerm] = useState('')

	const filterResultsByPrice = (price) => {
		return results.filter(r => {
			return r.price === price
		})
	}

	return (
		<>
			<SearchBar search={term} onSearch={setTerm} searchApi={() => searchApi(term)} />
			{
				error ?
					<Text>{error}</Text> : null
			}
			<Text>We have found {results.length} results</Text>
			<ScrollView>
				<ResultList title={"Cost Effective"} results={filterResultsByPrice('$')} />
				<ResultList title={"Bit Pricer"} results={filterResultsByPrice('$$')} />
				<ResultList title={"Big Spender"} results={filterResultsByPrice('$$$')} />
			</ScrollView>

		</>
	);
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default SearchScreen;
