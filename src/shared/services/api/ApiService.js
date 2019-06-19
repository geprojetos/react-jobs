const api = process.env.REACT_APP_API_URL;

class ApiService {
    
    async get(path) {
    
        try {
            
            let response = await fetch(`${ api }/${ path }`);
            
            if(!response.ok) throw response;

            response = await response.json();
            
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    async post(path, ...values) {

        try {
            
            let response = await fetch(
                `${ api }${ path }`,
                {
                    headers: this._setHeader(),
                    method: 'POST',
                    body: this._setBody(values[0])
                }
            );

            if(!response.ok) {
                throw response;
            };

            response = await response.json();
            return response
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    _setHeader() {

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        return headers;
    };

    _setBody(values) {

        const { login, password } = values;

        let body = JSON.stringify({ login, password });

        return body;
    };
}
 
export default ApiService;