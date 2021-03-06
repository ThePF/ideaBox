import React from "react";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import { loggedin } from "./services/auth";
import MyIdeas from "./components/Ideas/MyIdeas";
import { Route, Switch } from "react-router-dom";
import PublicViewIdea from "./components/Ideas/PublicView";
import IdeaForm from "./components/form/IdeaForm";
import Dashboard from "./components/dashboard/Dashboard";
import IdeaDetail from "./components/Ideas/IdeaDetail";
import ManagerDashboard from "./components/manager-dashboard/ManagerDashboard";
import ChallengeForm from "./components/manager-dashboard/ChallengeForm";
import Drafts from "./components/Ideas/Drafts";
import IdeaFeed from "./components/Ideas/IdeaFeed";
import AllChallenges from "./components/manager-dashboard/AllChallenges";
import Layout from "./components/Layout";
import { currentChallenge } from "./services/challenge";
import CurrentChallengeInfo from "./components/dashboard/CurrentChallengeInfo";
import OpenIdeas from "./components/dashboard/OpenIdeas";
import ManagerDashboardOpenIdeas from "./components/manager-dashboard/ManagerDashboardOpenIdeas";
import AdminDashboard from "./components/Admin/AdminDashboard";
import EditUserRole from "./components/Admin/EditUserRole";
import UserProfile from "./components/user-profile/UserProfile";

class Routes extends React.Component {
  state = {
    loggedIn: {},
    currentChallenge: {}
  };

  setUser = user => {
    this.setState({
      loggedIn: user
    });
  };

  getUser = () => {
    loggedin().then(user => {
      currentChallenge().then(challenge => {
        this.setState({
          loggedIn: user,
          currentChallenge: challenge.data
        });
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  setCurrentChallenge = currentChallenge => {
    this.setState({
      currentChallenge
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          {/* AUTH ROUTES */}
          <Switch>
            <Route
              exact
              path="/signup"
              render={props => (
                <SignUp
                  {...props}
                  setUser={this.setUser}
                  setCurrentChallenge={this.setCurrentChallenge}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  setUser={this.setUser}
                  setCurrentChallenge={this.setCurrentChallenge}
                />
              )}
            />

            <Layout
              setUser={this.setUser}
              loggedIn={this.state.loggedIn}
              currentChallenge={this.state.currentChallenge}
            >
              {/* DASHBOARD */}
              <Route
                exact
                path="/"
                render={props => (
                  <Dashboard
                    {...props}
                    currentChallenge={this.state.currentChallenge}
                  />
                )}
              />
              <Route
                exact
                path="/dashboard"
                render={props => (
                  <Dashboard
                    {...props}
                    currentChallenge={this.state.currentChallenge}
                  />
                )}
              />
              <Route path="user-profile" component={UserProfile} />
              <Route path="/open-ideas" component={OpenIdeas} />
              <Route
                path="/current-challenge-information"
                component={CurrentChallengeInfo}
              />
              <Route path="/user-profile" component={UserProfile} />
              {/* IDEA ROUTES */}
              <Route path="/submit-idea" component={IdeaForm} />
              <Route exact path="/my-ideas" component={MyIdeas} />
              <Route
                path="/my-ideas/:ideaId"
                render={props => (
                  <IdeaDetail {...props} loggedIn={this.state.loggedIn} />
                )}
              />
              <Route path="/idea-feed" component={IdeaFeed} />
              <Route exact path="/edit-idea/:ideaId" component={IdeaForm} />
              <Route
                path="/idea/:ideaId"
                render={props => (
                  <PublicViewIdea {...props} loggedIn={this.state.loggedIn} />
                )}
              />
              <Route exact path="/drafts" component={Drafts} />

              {/* MANAGER ROUTES */}
              <Route
                exact
                path="/managerDashboard"
                render={props => (
                  <ManagerDashboard
                    {...props}
                    currentChallenge={this.state.currentChallenge}
                  />
                )}
              />
              <Route
                path="/managerDashborad/all-challenges"
                component={AllChallenges}
              />
              <Route
                path="/managerDashboard/challengeForm"
                component={ChallengeForm}
              />
              <Route
                path="/managerDashboard/open-ideas"
                component={ManagerDashboardOpenIdeas}
              />

              {/* SUPER MANAGER ROUTES */}
              <Route path="/admin" component={AdminDashboard} />
              <Route exact path="/challenge-form" component={ChallengeForm} />
              <Route path="/edit-user-role" component={EditUserRole} />
            </Layout>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;
