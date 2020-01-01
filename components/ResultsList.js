//import liraries
import React from 'react';
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultsDetails';

// create a component
const ResultList = ({ title, results, navigation }) => {
	if (!results.length > 0) {
		return null
	}
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
							<ResultDetails result={item} />
						</TouchableOpacity>

					)
				}}
				keyExtractor={(result) => result.id}
			/>


		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		marginBottom: 10,

	},
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5
	},
});

//make this component available to the app
export default withNavigation(ResultList);
