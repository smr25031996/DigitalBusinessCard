import profile from "../assets/Shubham.png";

export default function Header() {
  return (
    <div>
      <img src={profile} alt="profile" />
      <div className="name">
      <h1>Shubham Rajput</h1>
      <h5>Full Stack software Developer</h5>
      </div>
      <div className="flex">
        <div className="flex-item">
          <button className="button">Email</button>
        </div>
        <div className="flex-item">
          <button className="button">Linkdin</button>
        </div>
      </div>
    </div>
  );
}
