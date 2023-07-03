import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form>
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
          <option value="amit">amit</option>
          <option value="shelly">shelly</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
