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
    }
}
 
export default ApiService;