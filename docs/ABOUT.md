# About CareBuddy

## Architecture Design
CareBuddy is designed with a microservices architecture, separating the frontend, backend, and data processing components to enhance scalability and maintainability. The backend is built with Node.js and Express.js, while the frontend leverages React for a dynamic user experience.

Key components include:

- **Frontend**: Built with React to provide a seamless user interface.
- **Backend**: Developed using Node.js and Express.js to handle API requests and data processing.
- **Data Storage**: Utilizes a NoDB design to enable rapid development while retaining the integrity of the application.

## UI/UX Design
The UI/UX design focuses on intuitive navigation and accessibility, crafted using Figma for prototyping. The design incorporates principles of simplicity and user-friendliness, inspired by the aesthetics of Big Hero 6 to create an engaging interface.

Key design elements include:

- **Responsive Design**: Ensures compatibility across various mobile devices and screen sizes.
- **Interactive Elements**: Enhances user engagement through interactive components and user-centric design.
- **Consistent Branding**: Maintains a cohesive look and feel throughout the application.



## User Manual
The user manuals provide step-by-step guides for both users and developers. These manuals cover features such as the chat interface, patient evaluation form, and managing favorites. Access the user manuals [here](#).

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
