// services/SellersService.ts
'use client'

import ServicesHelper from "@/src/utils/helpers/ServicesHelper";

const TABLE_NAME = 'sellers'

class SellersService {
	/**
	 * Aims to count the number of deliverers
	 * @param {string} jwt The jwt
	 */
	static async count(jwt) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/count`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in get of SellersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to get the deliverers
	 * @param {string} jwt The jwt
	 * @param {{}} params The params of the query
	 */
	static async get(jwt, params) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/get${ServicesHelper.addQueryParams(params)}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in get of SellersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to create a object
	 * @param {string} jwt The jwt
	 * @param {string} label The label of the deliverer
	 * @param {string} description OPTIONAL - The description
	 */
	static async createOne(jwt, label, description = '') {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ label: label, description: description }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in createOne of SellersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to delete a object
	 * @param {string} jwt The jwt
	 * @param {string} id The id of the object
	 */
	static async deleteOne(jwt, id) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/delete`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ _id: id }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in deleteOne of SellersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to update a object
	 * @param {string} jwt The jwt
	 * @param {string} id The id of the object
	 * @param {{}} modif The modif of the object
	 */
	static async updateOne(jwt, id, modif) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/update`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ _id: id, modif: modif }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in updateOne of SellersService:', error);
			throw error;
		}
	}
}

export default SellersService;