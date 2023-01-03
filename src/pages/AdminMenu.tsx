import Title from "../components/Title";
import EditMenu from "../components/EditMenu";
import IsAuth from "../components/IsAuth";
import Erro from "./Erro";

export default function AdminMenu() {
  if (!IsAuth()) {
    return <Erro />;
  }
  return (
    <div>
      <Title />
      <EditMenu />
    </div>
  );
}
