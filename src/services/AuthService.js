// services/AuthService.ts
'use client'

import ServicesHelper from "@/src/utils/helpers/ServicesHelper";

const TABLE_NAME = 'auth'

class AuthService {

	/**
	 * Aims to get a JWT from the server
	 * @param {string} login The user login
	 * @param {string} pwd   Its password
	 */
	static async login(login, pwd) {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ login: login, pwd: pwd }),
			})
				.then((response) => {
					return response;
				})
				.catch((err => {
					throw new Error(err)
				}));
		} catch (error) {
			console.error('Error in login of AuthService:', error);
			throw error;
		}
	}

	/**
	 * Aims to check the validity of the provided jwt
	 * @param {function} callbackGood The callback in case of good response
	 * @param {function} callbackBad The callback in case of bad response
	 * @param {string} jwt The jwt to test
	 */
	static checkJWTValidity(
		callbackGood,
		callbackBad,
		jwt
	) {
		try {
			fetch(`${process.env.NEXT_PUBLIC_EXPRESS_URL}/${TABLE_NAME}/check-valid`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + jwt,
				},
				body: JSON.stringify({}),
			})
				.then(async (response) => {

					if (ServicesHelper.isError(response.status)) {
						callbackBad(ServicesHelper.codeParsing(response.status));
					} else {
						const body = await response.json();
						callbackGood(body.data);
					}
				})
				.catch((err => {
					throw new Error(err);
				}));
		} catch (error) {
			console.error('Error in checkJWTValidity of AuthService:', error);
			throw error;
		}
	}
}

export default AuthService;