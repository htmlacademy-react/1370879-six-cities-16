import { MainProps, Main } from '../../pages/main/main';

function App({ places }: MainProps) {
  return (
    <Main places={places} />
  );
}

export default App;
