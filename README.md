# NestJS Practice

A comprehensive practice project exploring NestJS fundamentals, testing features, and learning various development methods for both server and client-side applications.

## 📋 Project Overview

This repository serves as a learning ground for:
- **NestJS Framework**: Building scalable server-side applications
- **Testing Practices**: Unit tests, integration tests, and end-to-end testing
- **Full-Stack Development**: Both backend and frontend implementation
- **Development Methods**: Best practices and design patterns

## 🛠️ Tech Stack

### Backend
- **NestJS** - Progressive Node.js framework for building efficient server-side applications
- **TypeScript** - Strongly typed JavaScript superset
- **Node.js** - JavaScript runtime environment

### Frontend
- **TypeScript** - Type-safe client-side development
- **CSS** - Styling
- **JavaScript** - Client-side interactivity
- **HTML** - Markup and structure

### Language Composition
- TypeScript: 70.2%
- CSS: 16.1%
- JavaScript: 11%
- HTML: 2.7%

## 📁 Project Structure

```
nest-practice/
├── src/
│   ├── server/              # Backend (NestJS)
│   │   ├── modules/         # Feature modules
│   │   ├── services/        # Business logic
│   │   ├── controllers/      # Request handlers
│   │   ├── dto/             # Data transfer objects
│   │   └── main.ts          # Application entry point
│   └── client/              # Frontend
│       ├── components/      # Reusable components
│       ├── pages/           # Page components
│       ├── styles/          # CSS files
│       └── index.html       # Main HTML file
├── test/                    # Test files
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/c1felode/nest-practice.git
cd nest-practice

# Install dependencies
npm install
```

### Running the Application

#### Start the Server
```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Watch mode
npm run start:watch
```

#### Start the Client
```bash
# Development server
npm run client:dev

# Build for production
npm run client:build
```

#### Run Both Concurrently
```bash
npm run dev
```

## 🧪 Testing

This project includes various testing approaches:

### Run All Tests
```bash
npm test
```

### Unit Tests
```bash
npm run test:unit
```

### Integration Tests
```bash
npm run test:int
```

### End-to-End Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## 📚 Server-Side (NestJS Backend)

### Key Features
- **Modular Architecture**: Organized into feature modules
- **Dependency Injection**: Built-in DI container
- **RESTful API**: Standard HTTP endpoints
- **Exception Handling**: Global exception filters
- **Middleware**: Request/response interceptors
- **Guard & Authentication**: Route protection
- **Database Integration**: ORM/database connectivity
- **Validation**: Request validation with decorators

### API Endpoints
```
GET    /api/health           - Health check
GET    /api/resources        - List all resources
POST   /api/resources        - Create new resource
GET    /api/resources/:id    - Get resource by ID
PUT    /api/resources/:id    - Update resource
DELETE /api/resources/:id    - Delete resource
```

### Example Usage
```typescript
// Basic NestJS controller example
@Controller('api/resources')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  findAll() {
    return this.resourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(id);
  }

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }
}
```

## 💻 Client-Side (Frontend)

### Key Features
- **Component-Based Architecture**: Reusable UI components
- **TypeScript Support**: Type-safe client code
- **Responsive Design**: CSS styling and layouts
- **API Integration**: Fetch/Axios integration with backend
- **State Management**: Client-side state handling
- **Form Handling**: Input validation and submission

### Project Features
- Interactive user interface
- Real-time data updates
- Form validation
- Error handling and user feedback
- Responsive design for multiple devices

### Example Component
```typescript
// Example TypeScript component
class ResourceComponent {
  private resources: Resource[] = [];

  constructor(private apiService: ApiService) {}

  async loadResources() {
    try {
      this.resources = await this.apiService.get('/api/resources');
      this.render();
    } catch (error) {
      console.error('Failed to load resources:', error);
    }
  }

  render() {
    // Render resources to DOM
  }
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3000
API_PREFIX=api

# Database Configuration (if applicable)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nest_practice
DB_USER=user
DB_PASSWORD=password

# Client Configuration
VITE_API_URL=http://localhost:3000
```

### TypeScript Configuration
- `tsconfig.json` - TypeScript compiler options
- Strict mode enabled for type safety
- Module resolution configured for both server and client

## 📖 Learning Resources

### NestJS Documentation
- [NestJS Official Docs](https://docs.nestjs.com)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

### Testing Resources
- Jest - JavaScript testing framework
- Supertest - HTTP assertion library
- Mock implementations and spy functions

### TypeScript
- [TypeScript Handbook](https://www.typescripthandbook.org)
- Decorators and metadata reflection

## 🎯 Learning Goals

- ✅ Master NestJS fundamentals and architecture
- ✅ Implement comprehensive testing strategies
- ✅ Build scalable server-side applications
- ✅ Create responsive client-side interfaces
- ✅ Understand full-stack development workflow
- ✅ Apply design patterns and best practices

## 📝 Notes

This is a **practice and learning project**. The code serves educational purposes and may not be production-ready. Use this repository to:
- Experiment with different NestJS features
- Practice testing methodologies
- Learn TypeScript best practices
- Understand full-stack development

## 🤝 Contributing

Feel free to fork, modify, and improve this practice project. This is a personal learning repository.

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

For questions or issues related to NestJS, refer to:
- [NestJS GitHub Discussions](https://github.com/nestjs/nest/discussions)
- [Stack Overflow - NestJS Tag](https://stackoverflow.com/questions/tagged/nestjs)

---

**Happy Learning! 🚀**
