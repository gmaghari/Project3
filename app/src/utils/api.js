import axios from "axios";

export default {
    // Submissions
    saveFilm: function (submissionData) {
        return axios.post("/api/contact/submission", submissionData); 
    },
    getSubmission: function (getSubmittedData) {
        return axios.get("/api/contact/submitted", getSubmittedData);
    },
    deleteFilm: function (id) {
        return axios.delete("/api/contact/" + id)
    },

    // Admin
    saveAdminFilm: function(adminFilmData){
        return axios.post("/api/admin/addFilm", adminFilmData);
    },
    getAdminFilm: function (getFilmData) {
        return axios.get("/api/admin/getFilm", getFilmData);
    },
    deleteAdminFilm: function (id) {
        return axios.delete("/api/admin/" + id)
    },
    updateAdminFilm: function (id, filmData) {
        return axios.put("/api/admin/" + id, filmData)
    },
    getAdminFilmById: function (id) {
        return axios.get("/api/admin/" + id)
    }


};



