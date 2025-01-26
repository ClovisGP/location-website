// services/HousesService.ts
'use client'

const TABLE_NAME = 'houses'

class HousesService {

	/**
	 * Aims to get the house of the user
	 * @param {string} jwt The jwt
	 */
	static async get(jwt) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/get-own`, {
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
			console.error('Error in get of HousesService:', error);
			throw error;
		}
	}


	/**
 * Aims to get the users list of the house of the current user
 * @param {string} jwt The jwt
 */
	static async countUsersList(jwt) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/count-users-list`, {
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
			console.error('Error in CountUsersList of HousesService:', error);
			throw error;
		}
	}

	/**
	 * Aims to get the users list of the house of the current user
	 * @param {string} jwt The jwt
	 */
	static async getUsersList(jwt) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/get-users-list`, {
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
			console.error('Error in getUsersList of HousesService:', error);
			throw error;
		}
	}

	/**
	 * Aims to update the house of the current user
	 * @param {string} jwt The jwt
	 * @param {{}} modif The modif of the object
	 */
	static async updateOwn(jwt, modif) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/update-own`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ modif: modif }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in updateOne of HousesService:', error);
			throw error;
		}
	}
}

export default HousesService;