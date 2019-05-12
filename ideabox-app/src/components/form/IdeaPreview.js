import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

export default class IdeaPreview extends Component {
  render() {
    const {
      values: {
        title,
        category,
        description,
        need,
        benefit,
        fileNames,
        estimatedResources,
        teamMembers,
        message,
        privacy,
        competition
      }
    } = this.props;
    return (
      <div>
        <h1>Confirm Idea Input</h1>
        <h3>Title</h3>
        <p>{title}</p>
        <h3>Category</h3>
        <p>{category}</p>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Need</h3>
        <p>{need}</p>
        <h3>Benefit</h3>
        <p>{benefit}</p>
        <h3>Estimated Resources</h3>
        {estimatedResources &&
          estimatedResources.map((resource, i) => {
            return (
              <List.Item key={i}>
                <List.Content>{resource}</List.Content>
              </List.Item>
            );
          })}
        <h3>Competition</h3>
        <p>{competition}</p>
        <h3>Team Members</h3>
        {teamMembers &&
          teamMembers.map((name, i) => {
            return (
              <List.Item key={i}>
                <List.Content>{name}</List.Content>
              </List.Item>
            );
          })}
        <h3>Message</h3>
        <p>{message}</p>
        <h3>Visibility</h3>
        <p>{privacy}</p>
        <h3>Attached Files</h3>
        <p>{fileNames}</p>
        <p>{this.props.first}</p>
        <Button onClick={this.props.prevStep}>Edit Form</Button>
        <Button onClick={this.props.handleDraft}>Save as draft</Button>
        <Button onClick={this.props.submitForm}>Submit Form</Button>
      </div>
    );
  }
}