import ButtonRow from '@components/ButtonRow';

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
      <button
        type="button"
        className="blueButton"
        onClick={() => alert('This button uses the global scss.')}
      >
        Test
      </button>
      <ButtonRow
        leftType="button"
        rightType="button"
        leftText="Button L"
        rightText="Button R"
        leftAction={() => alert('This row of buttons uses its own scss module.')}
        rightAction={() => alert('This row of buttons uses its own scss module.')}
      />
    </main>
  );
};

export default HomePage;
