# Car Management System

## Introduction

This project is an Angular-based Car Management System. It allows users to manage car details, including adding, updating, and removing cars. It also includes a login system for authentication.

## Architecture

The project follows a component-based architecture typical of Angular applications. The main components and services are:

- **LoginComponent**: Handles user authentication.
- **AuthService**: Manages authentication logic.
- **CarsService**: Provides methods to interact with the backend API for car data.
- **CarDetailsComponent**: Manages the form for adding and updating car details.
- **CsValidators**: Contains custom validators for form fields.

## Design Patterns

The project utilizes several design patterns to ensure maintainability and scalability:

- **Singleton**: Used in services like AuthService and CarsService to ensure a single instance throughout the application.
- **Factory**: Used in FormBuilder to create form groups and form arrays.
- **Observer**: Used in Angular's reactive forms and HTTP client to handle asynchronous data streams.

## New Feature: Customer Notification System

### Overview

A new feature has been added to notify customers via SMS and email when the status of their car repair changes. Customers can opt-in for notifications and choose their preferred method (SMS, email, or both). Notifications will be sent in real-time and provide details about the status change.

### Notification Examples

**SMS**: "Your car repair status has been updated to: [Status]. Expected completion: [Date]."

**Email**:

- **Subject**: "Car Repair Status Update"
- **Body**: "Dear [Customer], Your car's repair status has been updated to: [Status]. You can check more details here: [Link]."

### How to Configure Notifications

Users can select their preferred notification method during the car intake process or via their user profile. Notifications can be configured to trigger on specific status changes, such as "In Progress", "Completed", or "Awaiting Parts."

## How to Run

To run the project with the new notification system, follow these steps:

1. Clone the repository: [`git clone https://github.com/terabajt/carServiceAngular.git`](command:_github.copilot.openSymbolFromReferences?%5B%22git%20clone%20https%3A%2F%2Fgithub.com%2Fterabajt%2FcarServiceAngular.git%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22path%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A32%7D%7D%5D%5D "Go to definition")
2. Navigate to the project directory: [`cd carServiceAngular`](command:_github.copilot.openSymbolFromReferences?%5B%22cd%20carServiceAngular%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22path%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A60%7D%7D%5D%5D "Go to definition")
3. Install dependencies: [`npm install`](command:_github.copilot.openSymbolFromReferences?%5B%22npm%20install%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22path%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A38%2C%22character%22%3A26%7D%7D%5D%5D "Go to definition")
4. Run the application: [`ng serve`](command:_github.copilot.openSymbolFromReferences?%5B%22ng%20serve%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22path%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A39%2C%22character%22%3A24%7D%7D%5D%5D "Go to definition")
5. Open a browser and navigate to [`http://localhost:4200`](command:_github.copilot.openSymbolFromReferences?%5B%22http%3A%2F%2Flocalhost%3A4200%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22path%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A40%2C%22character%22%3A31%7D%7D%5D%5D "Go to definition")
6. Configure notification preferences under user settings.
7. Run tests: [`ng test`](command:_github.copilot.openSymbolFromReferences?%5B%22ng%20test%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22path%22%3A%22%2FUsers%2Fmichal%2FDocuments%2Fdev%2FcarServiceAngular%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A42%2C%22character%22%3A14%7D%7D%5D%5D "Go to definition")

## Product Requirements Document (PRD)

### Project Name: Car Management System - Customer Notification Feature

#### Objective:

The goal of this feature is to notify customers via SMS and email when there is a change in the status of their car's repair. This will help keep customers informed in real-time, enhancing the overall user experience and ensuring transparency during the repair process.

#### 1. Feature Overview:

- Add functionality to send SMS and email notifications to customers when the status of their car repair changes (e.g., "In Progress", "Completed", "Awaiting Parts").
- Notifications will include details such as the current status, expected completion time, and a link to track further updates.
- Users will be able to configure their preferred notification method (email, SMS, or both) during the car intake process or via their profile.

#### 2. Scope of Work:

**2.1. Backend Requirements:**

- Update the API to support triggering email and SMS notifications.
- Integrate with a third-party SMS provider (e.g., Twilio, Nexmo) and email service (e.g., SendGrid, Amazon SES).
- Ensure the system supports template-based notifications (e.g., email subject, body, and SMS content are customizable).
- Add an endpoint for fetching the car’s status and sending notifications accordingly.

**2.2. Frontend Requirements:**

- Add UI elements to allow users to opt-in for notifications and choose their preferred method (SMS, email, or both).
- Update the CarDetailsComponent to trigger status change notifications.
- Provide feedback to the user upon the status update (e.g., "Notification Sent Successfully").

**2.3. Notification Details:**

- **SMS Content Example**:"Your car repair status has been updated to: [Status]. Expected completion: [Date]."

- **Email Content Example**:
  - **Subject**: "Car Repair Status Update"
  - **Body**: "Dear [Customer], Your car's repair status has been updated to: [Status]. You can check more details here: [Link]."

#### 3. Non-Functional Requirements:

- Notifications should be sent within 1 minute of status change.
- System must ensure SMS and email content follows GDPR compliance and user preferences.
- Retry mechanism in case of SMS or email delivery failure (up to 3 attempts).

#### 4. Assumptions:

- The system already stores customer contact information.
- Status changes occur frequently and need real-time updates to customers.
- Users have agreed to receive notifications during the car intake process.

#### 5. Dependencies:

- Integration with third-party SMS and email providers (Twilio, SendGrid).
- Existing CarsService must support status updates for cars and notify the relevant services.

#### 6. Risks:

- Potential delays in SMS or email delivery.
- Misconfiguration of third-party services leading to missed notifications.
- Incorrect status updates leading to customer confusion.

#### 7. Timeline:

- **Week 1**: Set up third-party integrations and API updates.
- **Week 2**: UI updates to allow customers to select notification preferences.
- **Week 3**: Testing and deployment.

## Pre-Mortem Analysis

### 1. What could go wrong?:

- **Issue**: SMS/Email service provider could experience downtime.
  - **Mitigation**: Implement fallback strategies such as retry mechanisms or using an alternative provider if the main one fails.
- **Issue**: Incorrect status change triggers notifications too frequently.
  - **Mitigation**: Implement throttling logic to limit the frequency of notifications for the same status within a certain time window.
- **Issue**: Customers may find the notifications overwhelming or irrelevant.
  - **Mitigation**: Allow users to customize which types of status changes they want to be notified about (e.g., only “Completed” or “Urgent” statuses).
- **Issue**: Emails could be marked as spam by customer email providers.
  - **Mitigation**: Use email best practices (e.g., authenticated domains, SPF, DKIM) to prevent emails from being flagged as spam.

### 2. Worst-case scenarios:

- Notifications don’t reach the customers, causing frustration and increased support queries.
- High traffic overwhelms the SMS or email providers, leading to significant delays.
- Misleading status changes lead to premature or incorrect notifications, confusing the customer and impacting trust in the system.

### 3. How to prevent these issues:

- Regularly monitor SMS and email service availability using health checks.
- Thoroughly test status updates in staging environments before deployment.
- Allow users to review their notification preferences in the UI, giving them control over how often and for what events they receive updates.
- Implement a monitoring system that alerts the development team if notifications fail to send.
