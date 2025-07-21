# Gardening Assistant 🌱

## Introduction
Gardening Assistant is a plant care management app designed for gardening enthusiasts. It allows users to register and log in, add and track their plants, set watering reminders, and receive local notifications. The app helps ensure users never forget to care for their plants, while also offering features like photo journaling and seasonal tips.

## Project Type
Fullstack

## Deployed App
- Frontend: https://gardening-assistant.vercel.app  
- Backend: Firebase (Authentication & Firestore)  
- Database: https://console.firebase.google.com/project/testing-2b7e7/firestore

## Directory Structure
gardeningApp/
├─ public/
├─ src/
│ ├─ components/
│ ├─ pages/
│ ├─ redux/
│ ├─ routes/
│ ├─ services/
│ ├─ App.jsx
│ ├─ main.jsx
├─ firebase.json
├─ package.json


## Video Walkthrough of the Project
🎥 [Project Features Walkthrough (1–3 mins)](https://drive.google.com/drive/folders/1tOKTHwxXVUyZ3mAVCKzHJys70mYjUKfz)

## Video Walkthrough of the Codebase
🧠 [Codebase Overview (3–5 mins)](https://drive.google.com/drive/folders/1tOKTHwxXVUyZ3mAVCKzHJys70mYjUKfz)

## Features
- 🌿 User Authentication with Firebase
- 🪴 Add, View, and Delete Plants in My Garden
- 💧 Set Watering Reminders for Each Plant
- 🔔 Browser-Based Notification Alerts
- 🌱 Plant Tracker with Notes, Sunlight, and Growth Logs
- 📸 Plant Journal with Photo Upload
- 🐛 Pest & Disease Identification (Static Info)
- 🧑‍🤝‍🧑 Gardening Community Forum (Upcoming)
- 📅 Seasonal Gardening Tips (Upcoming)

## Design Decisions or Assumptions
- Used Firebase for real-time data handling and auth.
- Local Notification API used for reminders instead of background services (for simplicity).
- Firestore rules restrict data access per user.
- All reminders are stored with timestamps; filtering is done on client.
- Tailwind CSS used for styling due to its utility-first approach.

## Installation & Getting Started

```bash
git clone https://github.com/dahiyasahil44/gardeningApp.git
cd gardeningApp
npm install
npm run dev

# Add a new plant
Navigate to "My Plants", fill in details and submit.

# Set a watering reminder
Go to "Reminders", select plant and date, save it.

# Receive notifications
Grant permission when prompted and keep the app open.

#Credentials
Email - john@gmail.com
Password - 123456

#APIs Used
Firebase Authentication
Firebase Firestore (No REST endpoints)
Web Notification API (Local browser notifications)

#API Endpoints
This app uses Firebase SDKs instead of custom endpoints.
All data operations are done using:
Firestore client queries
Firebase Auth state listeners
Firestore rules for access control

#Technology Stack
#Frontend
    React.js
    Redux Toolkit
    React Router
    Tailwind CSS

#Backend & Database
    Firebase Authentication
    Firebase Firestore

#Other Tools
    Vercel (Deployment)
    Notification API (Web)
