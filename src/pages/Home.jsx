import WeeklyStatus from "../components/WeeklyStatus";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <i id="homepage-quot">
        &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        voluptatibus non! Minus, expedita! Aliquam illo, odio repellat
        temporibus, voluptates nobis sunt minus dolore a delectus assumenda
        minima, corrupti earum consequatur&quot; <br /> - Founders of Anatomy
        Archive
      </i>

      <WeeklyStatus />
      <WeeklyStatus />
      <WeeklyStatus />
      <WeeklyStatus />
      <WeeklyStatus />
      <WeeklyStatus />
    </div>
  );
}

export default Home;
