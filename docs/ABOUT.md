# CareBuddy Design
**Business Objective**: The team wanted to make an app for individuals experiencing difficulties following healthcare routines, improve healthcare accessibility to all communities, and provide personalized healthcare by leveraging AI.

## UI/UX
- Our design was inspired by the movie Big Hero 6, a story about a young boy befriending a healthcare robot.
- We chose a premade mobile app template from Figma to expedite the development process.

## Front-End
- React was our chosen front-end framework because of the team's familiarity with Javascript.
- We chose various CSS styling components, such as Sassy Stylesheets, Bootstrap, and MaterialUI to have an abundant resource of front-end library components, such as forms, buttons, and auto-sizing text boxes.
- We created a chat form for the user to help CareBuddy provide customized responses.
- The majority of the LLM interaction occurs on the Conversation screen through REST GET and POST API requests facilitated by the Axios HTTP client
- We incorporated accessibility recommendations by adding aria labels to HTML elements and utilized Semantic HTML with the help of Siteimprove Accessibility Checker Chrome plugin

## Back-End
- CareBuddy uses a View-Controller architecture to enable rapid development and simplicity.
	- Our time constraints and priority to develop the core features without being concerned with the technical aspects of integrating and mapping database models influenced our decision.
- We chose **Express.js** and **Node.js** to integrate back-end services to create GET and POST Endpoints to save and store the user's Favorites.
- We effectively used in-built React utilities to allow short-term data storage, allowing us to demonstrate the core functionality of CareBuddy.
- We used **OpenAI** after comparing a sampling of popular AI APIs, such as Amazon Bedrock, Azure Cognitive Services, Meta's LLAMA2, BERT on HuggingFace.com, and Groc Cloud.
	- OpenAI had the easiest integration documentation, simplest API schema, accurate responses, and affordable pricing options.

## Future Development
- **Scalability & Optimization**: 
  - We would like to deploy this website to AWS and implement a PostgreSQL database.
  - We would like to expand this into a patient monitoring system that will complete the feedback loop to the provider.
    - We believe sending the patient’s data back to the practitioner will better inform the physician about what care to recommend to the patient.
  - Create additional features, such as CareBuddy being able to schedule appointments.
  - Refactor the codebase to utilize React Native, Swift, or Flutter to ensure a modern, scalable mobile architecture.

- **Compliant Security**:
  - Integrate User OAuthentication to be compliant with website security standards.

- **Enhanced AI Capabilities**:
  - Integrate healthcare LLM models and utilize RAG to custom-tailor the responses based on the user's search history and favorites.

- **UI Enhancements and Branding**:
  -  Allow for a light and dark mode toggle in the screens
  -  Swap out the CareBuddy mascot to avoid copyright infringement
