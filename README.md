Certainly! Here's the updated README file for your "Staff Sync" project with the added features and deployment details:

---

# Staff Sync

Welcome to Staff Sync, a dynamic platform aimed at enhancing team coordination!

## Overview

Staff Sync is a comprehensive team coordination platform designed to streamline various aspects of team management and communication. Built with Angular, Tailwind CSS, Spring Boot, and MongoDB, Staff Sync offers a range of features to enhance team collaboration and efficiency.With Staff Sync, teams can seamlessly manage employee records, facilitate communication between team members, and ensure smooth workflow processes. The platform provides a user-friendly interface that promotes intuitive navigation and accessibility across different devices

## Features

### Responsive Design
- Ensures smooth user experience on all devices, promoting accessibility and usability.

### Robust Login Functionality
- Safeguards sensitive information with secure login functionality.

### Intuitive Interface Elements
- Promotes intuitive navigation for users, enhancing user experience.

### Employee Management
- Effortlessly add, edit, and delete employee records.

### Email Notifications
- Automated notifications sent to employees and their managers during the employee addition process.
- Employees receive their access card image via email, and managers receive essential employee details.

### OTP Validation
- Secure account creation through OTP validation during registration.

### Mobile App
- Access Staff Sync on the go with a mobile app version.

### Forgot Password Feature
- Allows users to securely reset their password by verifying their identity and sending a reset link to their registered email address.

### Task Management for Employees
- Allows employees to manage their tasks effectively.
- Team leaders can view tasks assigned to their team members.
- Automated email notifications sent when task deadlines are exceeded.

## Technologies Used

- **Angular:** Frontend framework for building dynamic web applications.
- **Tailwind CSS:** Utility-first CSS framework for creating custom designs quickly.
- **Spring Boot:** Backend framework for building enterprise-level Java applications.
- **MongoDB:** NoSQL database for storing and managing data efficiently.
- **Flask:** Used for handling mailing services.
- **SMTP:** For sending emails.
- **Google App Engine:** Deployment platform for both backend and OTP validation service.
- **DialogFlow:** ChatBot for user assistance.

## Deployment

- **Spring Boot Service:** Deployed on Google Cloud Platform at [https://employee-management-422016.el.r.appspot.com](https://employee-management-422016.el.r.appspot.com)
- **Frontend Service:** Deployed on Render.com at [https://employeeimage-latest.onrender.com](https://employeeimage-latest.onrender.com)
- **OTP Validation Service:** Deployed on Google App Engine at [https://mailboxexpress.el.r.appspot.com](https://mailboxexpress.el.r.appspot.com)

## Development

### Prerequisites

- Node.js and npm installed locally
- Angular CLI installed globally
- MongoDB installed locally
- Java Development Kit (JDK) installed
- Python and pip installed locally

### Clone the Backend and OTP Service
- Backend Service : [https://github.com/RithikSuthan/employeeService](https://github.com/RithikSuthan/employeeService)
- OTP Service : [https://github.com/RithikSuthan/MailBox-Express](https://github.com/RithikSuthan/MailBox-Express)

### Running Locally

1. Clone the repository: `git clone https://github.com/RithikSuthan/Staff-Sync`
2. Navigate to the backend directory: `cd employeeService`
3. Install Maven dependencies and start the Spring Boot application: `./mvnw spring-boot:run`
4. Navigate to the frontend directory: `cd ../employeemanagementUI`
5. Install npm dependencies: `npm install`
6. Start the Angular application: `ng serve`
7. Open your browser and navigate to `http://localhost:4200`
8. Navigate to the OTP validation service directory: `cd ../MailBox-Express`
9. Install Python dependencies: `pip install -r requirements.txt`
10. Start the Flask application: `python app.py`
11. Access the OTP service at `http://localhost:5000`

## Contributing

Contributions to this project are welcome! Feel free to submit bug fixes, feature enhancements, or documentation improvements via pull requests.

## Feedback

Your insights and feedback are invaluable! Please share your thoughts and suggestions for improving Staff Sync.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

---

Feel free to customize this README further with additional details or sections specific to your project's implementation and requirements. Let me know if you need any further assistance!


## Output Scrren Shots:
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/a0e57b79-bf34-47e3-ba3c-81a618fad23f)![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/d1d2dbe9-454a-4e5e-84f2-74f65b11ba4b)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/47191628-a099-4843-9222-3e22a039a44d)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/bf9e88c6-bbc1-4933-9ac7-bf6ef53b6b39)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/8a574371-b055-4f18-8976-a910e267eced)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/b283994e-3abf-493f-8728-b7110af77864)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/44800de6-b92b-4e80-9807-02461f161171)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/360aeea6-5987-4629-a355-2fdd1341d52d)
![image](https://github.com/RithikSuthan/employeemanagementUI/assets/72434153/7a793a62-9e7a-4501-98ca-37a6ede2bfec)








