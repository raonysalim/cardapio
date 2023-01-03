import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div>
      <Link className="title" to={"/"}>
        Oficina Rooftop
      </Link>
    </div>
  );
}
