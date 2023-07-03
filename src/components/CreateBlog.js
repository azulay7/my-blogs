import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    setTimeout(() => {
      axios
        .post("http://localhost:8000/blogs", blog)
        .then(function (response) {
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(setIsPending(false));
    }, 1000);
  };
  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form onSubmit={(e) => submitForm(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>Blog body:</label>
        <textarea
          required
          placeholder="Share your ideas"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="amit">Amit</option>
          <option value="shelly">Shelly</option>
        </select>
        {!isPending && <button className="add">Add Blog</button>}
        {isPending && (
          <button disabled className="add">
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
