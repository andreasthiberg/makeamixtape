// Fetch mixtape info from backend.

const mixtapes = {

    getAllMixtapes: async function getAllMixtapes() {

        const response = await fetch('http://localhost:5050/mixtape',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        const result = await response.json();
        return result;
    }
};

export default mixtapes;


