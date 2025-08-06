const axios = require('axios');

async function testBackend() {
  try {
    const response = await axios.get(
      'http://localhost:8080/api/doctors/search',
      {
        params: {
          location: 'Bangalore',
          specialty: 'Pediatrician'
        }
      }
    );

    console.log('Status:', response.status);
    console.log('Data:', response.data);
  } catch (error) {
    if (error.response) {
      console.log('Error Status:', error.response.status);
      console.log('Error Data:', error.response.data);
    } else {
      console.log('Error:', error.message);
  }
  }
}

testBackend();



