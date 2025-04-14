import axios from "axios";
// https://viacep.com.br/ <-- Nunca muda (base) --> varia (rota) ws/63800000/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" // Base Url é a Url Base
})

export default api; // Funciona com o return