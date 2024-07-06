import Main from '../../pages/main/main';

type AppProps = {
  placesToStay: number;
}

function App({ placesToStay }: AppProps) {
  return (
    <Main places={placesToStay} />
  );
}

export default App;
