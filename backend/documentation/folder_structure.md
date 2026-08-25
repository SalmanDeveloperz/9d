
```text
backend/
├── src/                      # All source code lives here
│   ├── config/               # Database connection and environment setups
│   │   └── db.js             
│   ├── models/               # Database Schemas (Data Layer)
│   │   └── userModel.js      
│   ├── controllers/          # HTTP request handlers (Orchestration Layer)
│   │   └── userController.js 
│   ├── services/             # Core business logic (Logic Layer)
│   │   └── userService.js    
│   ├── routes/               # API Endpoints (Routing Layer)
│   │   └── userRoutes.js     
│   ├── middlewares/          # Route guards and helpers
│   │   ├── authMiddleware.js 
│   │   └── errorMiddleware.js
│   ├── utils/                # Small reusable helper functions
│   │   └── generateToken.js  
│   └── app.js                # Express app configuration 
├── .env                      # Local secret variables (Never commit to Git)
├── .env.example              # Dummy keys template for your team
├── .gitignore                # Tells git to ignore node_modules and .env
├── package.json              # App dependencies and NPM scripts
└── server.js                 # Entry point (Starts the network server)
```