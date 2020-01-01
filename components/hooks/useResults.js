//import liraries
import React, { useState, useEffect } from 'react';
import yelp from './../api/yelp'
// create a component
export default () => {
	const [error, setError] = useState('')
	const [results, setResults] = useState([])

	useEffect(() => {
		searchApi('pasta')
	}, [])

	searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			});
			setResults(response.data.businesses)
		} catch (error) {
			setError('Something went Wrong')
		}
	}

	return [results, error, searchApi]

};



