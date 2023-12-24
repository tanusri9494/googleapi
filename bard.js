const { BardAPI } = require('bard-api-node');

async function testAssistant() {
  try {
    const assistant = new BardAPI();

    // Set session information for authentication
    await assistant.setSession('__Secure-1PSID', 'AIzaSyAD4DA9Pv199qvH42qeBeO5rWppz9DCPIM'); // or '__Secure-3PSID'
    // ...

    // Send a query to Bard
    const response = await assistant.getBardResponse('Hello, how are you?');
    console.log('Bard:', response.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

testAssistant();
