import axios from "axios";

export default function DeleteCategory(id) {
  axios(`http://localhost:3000/category/${id}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(() => {
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
}
