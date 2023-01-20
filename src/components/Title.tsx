import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="title">
      <Link className="titleContent" to={"/"}>
        Oficina Rooftop
      </Link>
    </div>
  );
}
