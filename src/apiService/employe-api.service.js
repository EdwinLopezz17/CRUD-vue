
import axios from "axios";

const http = axios.create({
    baseURL:"http://localhost:3000/"
})

export class EmployeApiService{

    getEmployeById(id){
        return http.get('employees/'+id);
    }
    getAllEmployees(){
        return http.get('employees');
    }
    deleteEmploye(id){
        return http.delete('employees/'+id);
    }
    createEmploye(body){
        return http.post('employees',body);
    }
    updateEmploye(id,body){
        return http.patch('employees/'+id,body);
    }
}