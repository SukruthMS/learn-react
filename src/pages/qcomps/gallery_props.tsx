import { GalleryProps } from "@/types/gallery";

function Profile({ scientist, size = 70 }: GalleryProps) {
  // Calculate the award count by checking if the awards string is non-empty
  const awardCount = scientist.awards ? scientist.awards.split(",").length : 0;

  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${scientist.imageId}s.jpg`}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: </b>
          {awardCount > 0
            ? `${awardCount} awards (${scientist.awards})`
            : "No awards"}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      imageId: "szV5sdG",
      profession: "physicist and chemist",
      awards:
        "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
      discovery: "polonium (element)",
    },
    {
      name: "Katsuko Saruhashi",
      imageId: "YfeOqp2",
      profession: "geochemist",
      awards: "Miyake Prize for geochemistry, Tanaka Prize",
      discovery: "a method for measuring carbon dioxide in seawater",
    },
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist) => (
        <Profile key={scientist.name} scientist={scientist} />
      ))}
    </div>
  );
}
