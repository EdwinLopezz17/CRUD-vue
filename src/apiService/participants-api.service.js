import axios from "axios";

const http = axios.create({
    baseURL:"http://localhost:3000/"
})

export class ParticipantsApiService{
    getAllParticipants(){
        return http.get('participants');
    }
    getParticipantById(id){
        return http.get('participants/'+id);
    }
    createParticipant(body){
        return http.post('participants',body);
    }
    updateParticipant(id,body){
        return http.patch('participants/'+id,body);
    }
    deleteParticipant(id){
        return http.delete('participants/'+id);
    }
}