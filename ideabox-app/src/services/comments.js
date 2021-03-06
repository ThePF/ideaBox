import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
});

const createComment = commentInput => {
  return service.post("/add-comment", {
    content: commentInput.content,
    ideaId: commentInput.ideaId
  });
};

const deleteComment = commentId => {
  return service.delete(`/delete-comment/${commentId}`)
}

export { createComment, deleteComment };
