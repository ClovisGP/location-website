// services/UsersService.ts
'use client'

const TABLE_NAME = 'users'

class UsersService {

	/**
	 * Aims to get the data of the current user without the password
	 * @param {string} jwt The jwt
	 */
	static async getOwn(jwt) {
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
			console.error('Error in getOwn of UsersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to update the current user
	 * @param {string} jwt The jwt
	 * @param {{}} modif The modif of the object. Without role or password.
	 */
	static async updateOwn(jwt, modif) {
		try {
			if (modif.role) delete modif.role;
			if (modif.password) delete modif.password;
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
			console.error('Error in updateOwn of UsersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to reinit the pwd of the current user
	 * @param {string} jwt The jwt
	 */
	static async reinitOwnPwd(jwt) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/reinit-own-pwd`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({}),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in reinitOwnPwd of UsersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to create a new MEMBER for the house of the current user
	 * @param {string} jwt The jwt
	 * @param {{}} newUser The user data (only the login and the name are taken into account)
	 */
	static async createNewMemberForHouse(jwt, newUser) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/create-member`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify(newUser),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in createNewMemberForHouse of UsersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to create a member for the house of the current user
	 * @param {string} jwt The jwt
	 * @param {string} idTargeted The id of the object
	 * @param {{}} modif The modifcation. Role and password are not taken into account
	 */
	static async updateUserForHouse(jwt, idTargeted, modif) {
		try {
			if (modif.role) delete modif.role;
			if (modif.password) delete modif.password;
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/update-member`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ _id: idTargeted, modif: modif }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in updateUserForHouse of UsersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to reinit the pwd of a certain user
	 * @param {string} jwt The jwt
	 * @param {string} idTargeted The id of the object
	 */
	static async reinitMemberPwd(jwt, idTargeted) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/reinit-member-pwd`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ _id: idTargeted }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in reinitOwnPwd of UsersService:', error);
			throw error;
		}
	}

	/**
	 * Aims to delete a MEMBER fo the current
	 * @param {string} jwt The jwt
	 * @param {string} idTargeted The id of the object
	 */
	static async deleteMember(jwt, idTargeted) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/delete-member`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({ _id: idTargeted }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in deleteMember of UsersService:', error);
			throw error;
		}
	}
}

export default UsersService;