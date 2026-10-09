function About({ image, about }) {
  return (
    <aside>
<<<<<<< HEAD
      <img
        src={image || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
=======
      <img src={image} alt="blog logo" />
>>>>>>> c4b18d944f23419b81c8b9f65609358cbcaa7894
      <p>{about}</p>
    </aside>
  );
}

export default About;
