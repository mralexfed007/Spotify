import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.sass';
import { HeaderView } from './header/header-view';
import { ContentView } from './content/content-view';
import { CurrentTrackView } from './current-track/current-track-view';

function App() {
  return (
    <div className="container">
      <HeaderView />
      <ContentView />
      <CurrentTrackView />
    </div>
  );
}

export default App;
