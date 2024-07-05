import Main from '../../pages/main/main';

type AppScreenProps = {
  placesToStay: number;
}

function App({ placesToStay }: AppScreenProps) {
  return (
    <Main placesToStay={placesToStay} />
  );
}

export default App;
