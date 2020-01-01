//import liraries
import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import yelp from './api/yelp'

// create a component
const ResultShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null)
	const id = navigation.getParam('id')
	getResults = async (id) => {
		try {
			const response = await yelp.get(`/${id}`);
			setResult(response.data)
		} catch (error) {
			setError('Something went Wrong')
		}
	}
	useEffect((() => {
		getResults(id)
	}), [])
	if (!result) {
		return null
	}

	return (
		<View >
			<FlatList
				data={result.photos}
				keyExtractor={photo => photo}
				renderItem={({ item }) => {
					return (
						<Image style={styles.imageStyle} source={{ uri: item }} />
					)
				}}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	imageStyle: {
		width: 220,
		height: 100,
		borderRadius: 5,
		marginVertical: 10,
		marginLeft: 10
	}

});

//make this component available to the app
export default ResultShowScreen;
