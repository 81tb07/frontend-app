import Button from '../components/Button';

const Home = () => {
  return (
    <main className="w-screen max-w-[600px] mx-auto h-screen px-8 flex flex-col items-start gap-6 content-stretch justify-center">
      <h1 className="text-3xl">Bitbot</h1>
      <p className="text-lg">
        Here is a short and impacting description of what Bitbot is all about.
        <br />
        Lorem ipsum dolor sit amet. I said lorem dolor sit ipsum amet boy.
      </p>
      <div className="flex items-center justify-between w-full">
        <img src="" className="text-xs" alt="Sign In Bitbot" />
        <img src="" className="text-xs" alt="Plan Your Trades" />
        <img src="" className="text-xs" alt="Trade The Plan" />
      </div>
      <div className="px-6 w-full">
        <Button variant="primary" text="Continue" to="/login" />
      </div>
    </main>
  );
};

export default Home;
