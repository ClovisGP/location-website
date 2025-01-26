class ServicesHelper {

    /**
     * Check if the code is a code error http
     * @param {number} code 
     * @returns Boolean
     */
    static isError(code) {
        if (Math.round(code / 100) != 2)
            return true;
        return false;
    }

    /**
     * Check the code, and return its translation key
     * @param {*} code 
     * @returns String
     */
    static codeParsing(code) {
        switch (code) {
            case 200:
                return 'http.200';
            case 201:
                return 'http.201';
            case 400:
                return 'http.400';
            case 401:
                return 'http.401';
            case 403:
                return 'http.403';
            case 404:
                return 'http.404';
            case 409:
                return 'http.409';
            default:
                return 'http.500';
        }
    }

    /**
     * Add to the query the param asked
     * @param {{}} params The object that contains the params
     * @returns The params formated
     */
    static addQueryParams(params) {
        if (Object.keys(params).length === 0)
            return '';
        const queryString = Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        return `?${queryString}`;
    }
}

export default ServicesHelper;