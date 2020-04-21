const handleAPIError = (err) => {
  if (err.response.status === 401) {
    throw new Error('Your API key is invalid - Go to https://nomics.com');
  } else if (err.response.status === 404) {
    throw new Error('Your API is not responding');
  } else {
    throw new Error('Something is not working');
  }
}

module.exports = { handleAPIError };
