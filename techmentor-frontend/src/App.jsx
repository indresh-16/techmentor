
import { BrowserRouter } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import FeedPage from './features/feed/pages/FeedPage';

function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <FeedPage />
      </PublicLayout>
    </BrowserRouter>
  );
}

export default App;
