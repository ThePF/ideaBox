import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
});

const challengeIdeas = challengeId => {
  return service.get(`/challenges/${challengeId}`);
};
const setDeadline = value => {
  return service.post("/set-deadline", { value }).then(response => {});
};
const currentChallenge = () => {
  return service.get("/current-challenge");
};

const getAllChallenges = () => {
  return service.get("/all-challenges");
};

const createChallenge = (title, description, startDate, deadline, managerPanel) => {
  return service
    .post("/managerDashboard/challengeForm", {
      title,
      description,
      startDate,
      deadline,
      managerPanel
    })
    .then(response => response.data);
};

export {
  challengeIdeas,
  createChallenge,
  currentChallenge,
  getAllChallenges,
  setDeadline
};
