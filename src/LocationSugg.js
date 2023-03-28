import React, { useState } from 'react';
import OpencageApiClient from 'opencage-api-client';

const apiClient = new OpencageApiClient({ key: 'your_api_key_here' });

function LocationSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    const result = await apiClient.geocode({
      q: query,
      countrycode: 'in',
      limit: 5, // limit to 5 results
    });
    const suggestions = result.results.map((location) => location.formatted);
    setSuggestions(suggestions);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocationSuggestions;
