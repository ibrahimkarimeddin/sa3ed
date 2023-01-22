import React  from 'react';

import { QueryClientProvider, QueryClient } from 'react-query';

function App(){
  const queryclient = new QueryClient()
    return (
      <QueryClientProvider client={queryclient}>
       hh
      </QueryClientProvider>
      
    )
}

export default(App);
