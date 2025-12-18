# UXKraft Backend API

A robust NestJS-based REST API for managing shipping, logistics, and inventory operations with PostgreSQL database and Swagger documentation.

## 🚀 Features

- **RESTful API** - Complete CRUD operations for all resources
- **Advanced Search** - Full-text search across items with LIKE queries
- **Bulk Operations** - Update multiple ships simultaneously
- **Data Validation** - Request validation with class-validator
- **API Documentation** - Interactive Swagger/OpenAPI documentation
- **Database Migrations** - Version-controlled database schema with Sequelize CLI
- **Type Safety** - Full TypeScript implementation
- **CORS Enabled** - Cross-origin resource sharing support
- **Modular Architecture** - Clean separation of concerns

## 🛠️ Tech Stack

### Core Framework
- **NestJS 11** - Progressive Node.js framework
- **TypeScript 5.7** - Type-safe JavaScript
- **Express** - HTTP server (via @nestjs/platform-express)

### Database & ORM
- **PostgreSQL** - Primary database
- **Sequelize 6** - ORM and query builder
- **Sequelize-TypeScript 2** - TypeScript decorators for Sequelize
- **pg** - PostgreSQL client for Node.js

### API Documentation
- **Swagger/OpenAPI** - Auto-generated interactive API docs

### Validation & Transformation
- **class-validator** - Decorator-based validation
- **class-transformer** - Object transformation

### Development & Testing
- **Jest** - Testing framework
- **Supertest** - HTTP assertions
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **ts-node** - TypeScript execution

## 📁 Project Structure

```
src/
├── modules/
│   ├── app/              # Root application module
│   ├── ship/             # Shipping management
│   │   ├── dto/         # Data transfer objects
│   │   ├── ship.controller.ts
│   │   ├── ship.service.ts
│   │   ├── ship.model.ts
│   │   └── ship.module.ts
│   ├── item/             # Item/product management
│   │   ├── dto/
│   │   ├── item.controller.ts
│   │   ├── item.service.ts
│   │   ├── item.model.ts
│   │   └── item.module.ts
│   ├── vendor/           # Vendor management
│   ├── location/         # Location management
│   └── category/         # Category management
├── sequelize/
│   └── migrations/       # Database migrations
├── main.ts               # Application entry point
└── config/
    └── database.config.ts # Database configuration

```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- pnpm (v8 or higher)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
# Copy the example env file
cp .development.env .env
```

3. Configure database in `.development.env`:
```env
PORT=8080
NODE_ENV='development'
DATABASE_URL='http://localhost'
DATABASE_NAME='shipping'
DATABASE_PORT=5432
DATABASE_USER='postgres'
DATABASE_PASSWORD='your_password'
```

4. Create the database:
```bash
# Using psql
createdb shipping

# Or via PostgreSQL client
psql -U postgres
CREATE DATABASE shipping;
```

5. Run migrations:
```bash
pnpm run db:migrate
```

6. Start the development server:
```bash
pnpm run start:dev
```

The API will be available at `http://localhost:8080/api`

### Available Scripts

- `pnpm start` - Start the application
- `pnpm start:dev` - Start in watch mode (hot reload)
- `pnpm start:debug` - Start in debug mode
- `pnpm start:prod` - Start production build
- `pnpm build` - Build the application
- `pnpm db:migrate` - Run database migrations
- `pnpm lint` - Lint and fix code
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run unit tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:cov` - Generate test coverage
- `pnpm test:e2e` - Run end-to-end tests

## 📚 API Documentation

Interactive API documentation is available via Swagger at:

```
http://localhost:8080/api
```

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response schemas
- Try-it-out functionality for testing endpoints
- Model definitions

## 🗄️ Database Schema

### Tables

#### Ships
Main shipping records with tracking information
- **Relations**: Item, Vendor, Location, Category
- **Key Fields**: itemId, vendorId, locationId, categoryId, quantity, phase, tracking dates

#### Items
Products and materials being shipped
- **Key Fields**: name, description, price, markup, spec

#### Vendors
Supplier/vendor information
- **Key Fields**: name

#### Locations
Shipping destinations/locations
- **Key Fields**: name

#### Categories
Item categorization
- **Key Fields**: name

### Migrations

Database migrations are located in `src/sequelize/migrations/`

To create a new migration:
```bash
npx sequelize-cli migration:generate --name your-migration-name
```

## 🔍 API Endpoints

### Ships
- `GET /api/ships` - Get all ships
- `GET /api/ships/search?q={query}` - Search ships by item name/spec
- `GET /api/ships/:id` - Get ship by ID
- `POST /api/ships` - Create new ship
- `POST /api/ships/bulk-update` - Bulk update ships
- `PATCH /api/ships/:id` - Update ship
- `DELETE /api/ships/:id` - Delete ship

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item
- `PATCH /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

### Vendors
- `GET /api/vendors` - Get all vendors
- `GET /api/vendors/:id` - Get vendor by ID
- `POST /api/vendors` - Create new vendor
- `PATCH /api/vendors/:id` - Update vendor
- `DELETE /api/vendors/:id` - Delete vendor

### Locations
- `GET /api/locations` - Get all locations
- `GET /api/locations/:id` - Get location by ID
- `POST /api/locations` - Create new location
- `PATCH /api/locations/:id` - Update location
- `DELETE /api/locations/:id` - Delete location

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create new category
- `PATCH /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

## 🔎 Search Functionality

The ship search endpoint supports advanced querying:

```bash
GET /api/ships/search?q=curtain
```

**Search Behavior:**
- Searches across item name and spec fields
- Case-insensitive partial matches
- Uses PostgreSQL LIKE with `%query%` pattern
- Returns all ships if query is empty

**Example Queries:**
```bash
# Search by item name
GET /api/ships/search?q=Curtain

# Search by spec
GET /api/ships/search?q=no spec

# Partial match
GET /api/ships/search?q=cur
```

For detailed search documentation, see [SEARCH_API.md](./SEARCH_API.md)

## 📦 Bulk Operations

Update multiple ships in a single request:

```typescript
POST /api/ships/bulk-update
{
  "ids": [1, 2, 3],
  "phase": 5,
  "status": true
}
```

## 🔐 Data Validation

All DTOs include validation decorators:

```typescript
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateShipDto {
  @IsNotEmpty()
  @IsNumber()
  itemId: number;

  @IsNotEmpty()
  @IsString()
  shipToTitle: string;

  @IsOptional()
  @IsString()
  notes?: string;
  // ... more fields
}
```

**Validation Features:**
- Automatic validation on all endpoints
- Type checking and transformation
- Whitelist mode (strips unknown properties)
- Comprehensive error messages

## 🏗️ Architecture

### Module Structure

Each module follows the NestJS pattern:

```
module/
├── dto/                 # Data Transfer Objects
├── module.controller.ts # HTTP endpoints
├── module.service.ts    # Business logic
├── module.model.ts      # Sequelize model
└── module.module.ts     # NestJS module definition
```

### Design Patterns
- **Dependency Injection** - NestJS built-in DI container
- **Repository Pattern** - Sequelize models as repositories
- **DTO Pattern** - Separate DTOs for create/update operations
- **Module Pattern** - Feature-based module organization

## 🧪 Testing

### Unit Tests
```bash
pnpm test
```

### E2E Tests
```bash
pnpm test:e2e
```

### Coverage Report
```bash
pnpm test:cov
```

Tests are located alongside source files (`*.spec.ts`) and in the `test/` directory for E2E tests.

## 🔧 Configuration

### Database Configuration

Database settings are managed in `config/database.config.ts` with environment-specific configurations:

- Development
- Test
- Production

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `8080` |
| `NODE_ENV` | Environment | `development` |
| `DATABASE_URL` | Database URL | `http://localhost` |
| `DATABASE_NAME` | Database name | `shipping` |
| `DATABASE_PORT` | Database port | `5432` |
| `DATABASE_USER` | Database user | `postgres` |
| `DATABASE_PASSWORD` | Database password | - |

## 🚀 Deployment

### Production Build

```bash
# Build the application
pnpm build

# Run production server
pnpm start:prod
```

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure production database
- [ ] Run migrations on production database
- [ ] Set secure database credentials
- [ ] Configure CORS for production domain
- [ ] Enable HTTPS
- [ ] Set up logging and monitoring
- [ ] Configure environment variables

## 📊 Performance Considerations

- **Database Indexing** - Primary and foreign keys are indexed
- **Eager Loading** - Related data is included in queries to avoid N+1 problems
- **Connection Pooling** - Sequelize manages database connections
- **Validation Caching** - Class-validator caches metadata

## 🔒 Security

- **CORS Enabled** - Configurable cross-origin requests
- **Input Validation** - All inputs validated with class-validator
- **SQL Injection Protection** - Sequelize parameterized queries
- **Type Safety** - TypeScript prevents type-related vulnerabilities

## 🎯 Future Enhancements

- [ ] Authentication & Authorization (JWT)
- [ ] Role-based access control
- [ ] Rate limiting
- [ ] Caching layer (Redis)
- [ ] WebSocket support for real-time updates
- [ ] File upload for attachments
- [ ] Advanced filtering and sorting
- [ ] Audit logging
- [ ] API versioning
- [ ] GraphQL support

## 🐛 Debugging

### Debug Mode
```bash
pnpm start:debug
```

Then attach your debugger to port `9229`

### Database Queries
Enable Sequelize logging in development:
```typescript
// In database config
{
  logging: console.log, // or false to disable
}
```

## 📝 Code Style

- **ESLint** - Enforces code quality rules
- **Prettier** - Enforces code formatting
- **TypeScript Strict Mode** - Maximum type safety

### Formatting
```bash
pnpm format
```

### Linting
```bash
pnpm lint
```

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Use TypeScript for all new code
3. Write unit tests for services
4. Update API documentation (Swagger decorators)
5. Run linter and formatter before committing
6. Follow conventional commits for commit messages

## 📄 License

Private project - All rights reserved

---

Built with ❤️ using NestJS and TypeScript
