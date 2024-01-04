import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/"

class ClienteService {
    obtenerClientes() {
        return axios.get(CLIENTE_BASE_REST_API_URL + "clientes");
    }

    guardarCliente(cliente) {
        return axios.post(CLIENTE_BASE_REST_API_URL + "agregar", cliente);
    }


    obtenerClientePorId(clienteId) {
        return axios.get(CLIENTE_BASE_REST_API_URL + "clientes/" + clienteId);
    }

    actualizarCliente(clienteId, cliente) {
        return axios.put(CLIENTE_BASE_REST_API_URL + "clientes/" + clienteId, cliente);

    }
    eliminarCliente(clienteId) {
        return axios.delete(CLIENTE_BASE_REST_API_URL + "cliente" + clienteId);
    }
}


export default new ClienteService();