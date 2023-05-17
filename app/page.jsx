import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover, Create and Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI Prompts</span>
    </h1>
    <p className="desc text-center">
      Promptify is a tool where AI meets creativity, enabling users to discover,
      create, and share inspiring prompts.
    </p>

    <Feed />
  </section>
);

export default Home;
