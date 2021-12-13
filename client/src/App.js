import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div className="flex h-screen bg-gray-200 items-center justify-center">
      <section className="card_wrapper p-5">
        <ImageUploader />
      </section>
    </div>
  );
}

export default App;
