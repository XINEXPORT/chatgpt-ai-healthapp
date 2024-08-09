# CareBuddy Design
CareBuddy is designed using a scaled down version of a traditional MVC (Model, View, Controller) design.

## UI/UX
- Our design was inspired by the movie Big Hero 6, a story about a young boy befriending a nurse robot.
- We chose a premade mobile app template from Figma

## Front-End
- 

## Back-End
- We chose to use **Express.js** and **Node.js** to integrate back-end services to create GET and POST Endpoints so that we had the ability to save and store the user's Favorites.
- We decided to use **OpenAI** after comparing a sampling of popular AI APIs, such as Amazon Bedrock, Azure Cognitive Services, Meta's LLAMA2, BERT on HuggingFace.com, and Groc Cloud.
	- OpenAI had the easiest integration documentation, simplest API schemas, accurate responses, and affordable pricing options.
- Our decision to not use a database was influenced by our time constraints and priority to develop the core features without being concerned with the technical aspects of integrating and mapping database models.
 - We effectively used in-built React utilities to allow short term storage for data which allowed us to demonstrate the core functionality of CareBuddy.


## User Manual
Access the user manual [here](#).

## Future Development
- **Scalability & Optimization**: 
  - We would like to deploy this website to AWS and implement a database, such as PostgreSQL.
  - We would like to expand this into a patient monitoring system that will complete the feedback loop to the provider.
    - We believe sending the patient’s data back to the practitioner will better inform the physician about what care to recommend to the patient.
  - Create additional features, such as CareBuddy being able to schedule appointments for the patient and frequently send the patient's progress to the practitioner.
  - Refactor the codebase to utilize React Native, Swift, or Flutter to ensure a modern, scalable mobile architecture.

- **Compliant Security**:
  - Integrate User OAuthentication to be compliant with website security standards.

- **Enhanced AI Capabilities**:
  - Integrate healthcare LLM models and utilize RAG to custom-tailor the responses based on the user's search history and favorites.

- **UI Enhancements and Branding**:
  -  Allow for a light and dark mode toggle in the screens
  -  Swap out the CareBuddy mascot to avoid copyright infringement
