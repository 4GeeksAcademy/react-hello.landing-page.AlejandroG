


import Navbar from "../components/Navbar";
import Header from "../components/Jumbotron";
import Card from "../components/Card";

const Home = () => {
  const cards = [
    {
      title: "Card Title 1",
      text: "Lorem ipsum dolor sit amet.",
      image: "https://placehold.co/500x325?"
    },
    {
      title: "Card Title 2",
      text: "Consectetur adipisicing elit.",
      image: "https://placehold.co/500x325?"
    },
    {
      title: "Card Title 3",
      text: "Eligendi, repellat. Officia.",
      image: "https://placehold.co/500x325?"
    },
    {
      title: "Card Title 4",
      text: "Eveniet autem fuga rem.",
      image: "https://placehold.co/500x325?"
    }
  ];
  return (
    <>
      <Navbar />
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="row">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
