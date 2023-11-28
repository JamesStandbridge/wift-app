import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import AppContext from './layout/AppContext';
import Theme from './theme/Theme';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Theme>
                <AppContext />
            </Theme>
        </QueryClientProvider>
    );
}

export default App;
