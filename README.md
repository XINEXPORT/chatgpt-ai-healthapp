![Welcome](https://github.com/user-attachments/assets/7139c4c6-5b7a-4737-9761-1c73d1be7a3f)

# CareBuddy, an AI Healthcare Chat Companion

CareBuddy is an AI Healthcare chat companion that can recommend lifestyle tips and nutrition recommendations for individuals seeking a healthier lifestyle.

CareBuddy tailors its responses by analyzing a user's personal information, creating a more personalized interaction. It offers a conversation-like patient evaluation form to gather detailed information about the user, a chat page for seamless interaction, and a Favorites list feature that allows users to save their favorite responses.

## Watch our video to learn about the development process and see CareBuddy in action!

---

## Table of Contents

- [Contributors](#contributors)
- [Technologies](#technologies)
- [About CareBuddy](#about-carebuddy)
  - [Architecture Design](#architecture-design)
  - [UI/UX Design](#uiux-design)
  - [User Manuals](#user-manuals)
  - [Future Plans](#future-plans)
- [Developer Instructions](#developer-instructions)
  - [Committing Changes](#committing-changes)
  - [Publish Your Changes](#publish-your-changes)

## Contributors

Meet the team behind CareBuddy

<table>
  <tr>
    <td align="center" width="200">
      <a href="https://www.linkedin.com/in/hamna-tameez-6495b2292/">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQHDLVJ-b6FbvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722898425036?e=1728518400&v=beta&t=Md3IC5q2-NKAN4W_RLSIucwKTAAiLDLcMFjFH9RGIX8" width="100px;" alt="Profile Picture"/><br />
        <sub><b>Hamna Tameez</b></sub>
      </a><br />
    </td>
    <td align="center" width="200">
      <a href="https://www.linkedin.com/in/christine-hoang-profile/">
        <img src="https://media.licdn.com/dms/image/D5603AQGExGf0D4scgQ/profile-displayphoto-shrink_800_800/0/1710947655283?e=1728518400&v=beta&t=mmMEX9OtvH4iWwNNt7o6g3T-hbD9VgHOnLrUx5xfHnU" width="100px;" alt="Profile Picture"/><br />
        <sub><b>Christine Hoang</b></sub>
      </a><br />
    </td>
    <td align="center" width="200">
      <a href="https://www.linkedin.com/in/aryanmurthy/">
        <img src="https://media.licdn.com/dms/image/D5603AQHTxAV4aDNfoQ/profile-displayphoto-shrink_800_800/0/1722981888880?e=1728518400&v=beta&t=n2UDf__26q6uf6W1t92Ef4ZX7RbPBLhDDya7-QxZNk4" width="100px;" alt="Profile Picture"/><br />
        <sub><b>Aryan Murthy Illa</b></sub>
      </a><br />
    </td>
    <td align="center" width="200">
      <a href="https://www.linkedin.com/in/erubal/">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFuphPhsrkZ9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641338203973?e=1728518400&v=beta&t=unqbYh_qu7aHySlPQ98twybfvypl2hcXSRgC5TkoY88" width="100px;" alt="Profile Picture"/><br />
        <sub><b>Eric Rubalcaba</b></sub>
      </a><br />
    </td>
    <td align="center" width="200">
      <a href="https://www.linkedin.com/in/perumalla-litesh/">
        <img src="https://media.licdn.com/dms/image/D4D35AQHqnzK_nEhEPg/profile-framedphoto-shrink_800_800/0/1684505665712?e=1723658400&v=beta&t=9AnFe5QqcCLJ5E8aVEtsxglfzacDJvxvqwqPFwCmTVw" width="100px;" alt="Profile Picture"/><br />
        <sub><b>Perumalla Litesh</b></sub>
      </a><br />
    </td>
  </tr>
</table>

---

## Technologies
~~~
Frontend Development:
    React (Javascript): Enables fast web application development while ensuring high-quality user experience
    Sass Stylesheets
    Bootstrap
    MaterialUI

Backend Development:
    Node.js: Enables server-side development for Conversation, Patient Information, and Favorites screens
    Express.js: Allows for backend logic and API services
    Axios: A reliable and simple to use web service
    Vite: A fast web application build tool that allows for rapid development

External APIs:
    OpenAI: OpenAI is integrated in the Conversation and Patient Information screens

Design and Project Management Tools:
    Figma: Utilized for UI/UX design to create a visually striking cross-platform mobile application inspired by the movie, Big Hero 6
    NotionDB: For agile project management and ticket tracking ensuring transparent work responsibiltiies and smooth development
    Prettier: Allowed for organized and structured code to improve readability and prevent merge conflicts
    Github: Used for version control to assist with code management, increase collaboration, and reduce miscommunication by using branching strategy and performing Pull Request reviews
~~~


---

## About CareBuddy
<details>
  <summary>Architecture Design</summary>
CareBuddy is designed with a microservices architecture, separating the frontend, backend, and data processing components to enhance scalability and maintainability. The backend is built with Node.js and Express.js, while the frontend leverages React for a dynamic user experience.

Key components include:

- **Frontend**: Built with React to provide a seamless user interface.
- **Backend**: Developed using Node.js and Express.js to handle API requests and data processing.
- **Data Storage**: Utilizes a NoDB design to enable rapid development while retaining the integrity of the application
</details>

<details>
<summary>UI/UX Design</summary>
The UI/UX design focuses on intuitive navigation and accessibility, crafted using Figma for prototyping. The design incorporates principles of simplicity and user-friendliness, inspired by the aesthetics of Big Hero 6 to create an engaging interface.

Key design elements include:

- **Responsive Design**: Ensures compatibility across various mobile devices and screen sizes.
- **Interactive Elements**: Enhances user engagement through interactive components and user char design.
- **Consistent Branding**: Maintains a cohesive look and feel throughout the application.
</details>

<details>
  <summary>User Manual</summary>
The user manuals provide step-by-step guides for both users and developers. These manuals cover features such as the chat interface, patient evaluation form, and managing favorites. Access the user manuals [here](#).
</details>

<details>
  <summary>Future Development</summary>
Our future plans include:

- **Advanced AI Capabilities**: Integrating more advanced AI models for personalized health assessments and the adoption of RAG to customize the LLM responses to the user.
- **Enhanced Data Security**: Implementing advanced security measures to protect user data, such as implementing OAUTH.
- **Mobile App Development**: Refactor the code to utilize React Native, Swift, or Flutter to ensure scalable mobile architecture.
<details>
---

## Developer Instructions

- Clone the repository to your directory:

  ![image](https://github.com/user-attachments/assets/4d805a50-a9f6-449b-be61-77ed2b5179ce)

- In your terminal, type `npm i` and hit enter.

- In your terminal, type `npm run dev` and hit enter.

- Open a second terminal and navigate to the server directory:

  - Type `node app.js` to start the server.

---

## Committing Changes

- Make sure to run `npm run prettier` before pushing your changes.

- If you make any package installs or config changes, inform the team to do an `npm i` when they pull the latest changes.

---

## Publish Your Changes

- In your terminal, type `npm run deploy` to push your changes to GitHub Pages.
  - You can validate this by going to the Actions tab in the repository. You should see your build processing.
- View your changes here: [CareBuddy Live Site](https://xinexport.github.io/chatgpt-ai-healthapp/)

---


