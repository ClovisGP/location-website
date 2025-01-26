// services/StatusService.ts
'use client'

import ServicesHelper from "@/src/utils/helpers/ServicesHelper";

const TABLE_NAME = 'status'

class StatusService {

	/**
	 * Aims to get the Status
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
			console.error('Error in get of StatusService:', error);
			throw error;
		}
	}
}

export default StatusService;