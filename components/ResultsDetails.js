//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// create a component
const ResultDetails = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.imageStyle} source={{ uri: result.image_url }} />
			<Text style={styles.nameStyle}>{result.name}</Text>
			<Text style={styles.nameStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	},
	imageStyle: {
		width: 250,
		height: 120,
		borderRadius: 5,
		marginBottom: 5
	},
	nameStyle: {
		fontWeight: 'bold',
		fontSize: 14,
	},



});

//make this component available to the app
export default ResultDetails;
