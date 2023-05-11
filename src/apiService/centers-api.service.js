import axios from "axios";

const http = axios.create({
    baseURL:"http://localhost:3000/"
})

export class CentersApiService{
    getAllCenters(){
        return http.get('centers');
    }
    getCenterById(id){
        return http.get('centers/'+id);
    }
    createCenter(body){
        return http.post('centers',body);
    }
    updateCenter(id,body){
        return http.patch('centers/'+id,body);
    }
    deleteCenter(id){
        return http.delete('centers/'+id);
    }

    getCenterNameById(centerId) {
        return http.get(`centers/${centerId}`).then(response => (
            response.data.name
        ));
    }
}