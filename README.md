# eQMS Deviation Management System

A comprehensive Electronic Quality Management System (eQMS) for pharmaceutical and medical device manufacturing, featuring deviation management, change control, and document management capabilities.

## 🌟 Features

### 📋 **Deviation Management**
- **Complete CAPA Workflow**: Investigation, root cause analysis, corrective actions
- **Role-based Approvals**: Multi-level approval process with electronic signatures
- **Real-time Tracking**: Dashboard analytics and status monitoring
- **Regulatory Compliance**: FDA 21 CFR Part 820, ISO 13485 aligned workflows

### 📝 **Change Management**  
- **Change Control Board**: Structured change request and approval process
- **Impact Assessment**: Risk evaluation and stakeholder analysis
- **Version Control**: Document versioning with audit trails
- **Electronic Signatures**: Digital certificate management and validation

### 📚 **Document Control**
- **Lifecycle Management**: Draft → Review → Active → Obsolete workflows
- **Access Control**: Role-based permissions and distribution lists
- **Audit Trail**: Complete history tracking for compliance
- **Electronic Records**: 21 CFR Part 11 compliant document management

### 🔐 **Security & Compliance**
- **Role-based Authentication**: 6 user roles with granular permissions
- **Audit Trails**: Comprehensive logging for regulatory inspections  
- **Electronic Signatures**: RSA-256 digital certificates
- **Data Integrity**: ALCOA+ principles implementation

## 🚀 Technology Stack

- **Frontend**: Next.js 16 with Turbopack, React, TypeScript
- **Styling**: Inline CSS with responsive design
- **Database**: Prisma ORM ready (MySQL/PostgreSQL)
- **Authentication**: Role-based access control
- **File Handling**: Upload and download capabilities

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/eQMS--Deviation-Management-.git
cd eQMS--Deviation-Management-
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Access the application**
Open [http://localhost:3000](http://localhost:3000)

## 👥 User Roles & Permissions

| Role | Permissions | Access Level |
|------|------------|--------------|
| **QA Manager** | Full system access, approval authority | Admin |
| **QA Officer** | Investigation, CAPA creation, document review | Advanced |
| **Production Manager** | Production deviations, change implementation | Advanced |
| **Regulatory Affairs** | Regulatory review, submission oversight | Specialized |
| **Quality Engineer** | Technical investigations, data analysis | Standard |
| **Operator** | Deviation reporting, basic document access | Basic |

## 🏗️ System Architecture

```
eQMS System/
├── Dashboard - Analytics & KPIs
├── Deviation Management
│   ├── CAPA Workflow
│   ├── Investigation Tools  
│   └── Approval Process
├── Change Management
│   ├── Change Requests
│   ├── Impact Assessment
│   └── Implementation Tracking
└── Document Control
    ├── Document Lifecycle
    ├── Version Control
    └── Distribution Management
```

## 📋 Compliance Standards

- **FDA 21 CFR Part 820**: Medical Device Quality System Regulation
- **FDA 21 CFR Part 11**: Electronic Records and Signatures
- **ISO 13485**: Medical Device Quality Management
- **ICH Q10**: Pharmaceutical Quality System
- **ALCOA+**: Data Integrity Principles

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (when configured)
npx prisma migrate   # Run database migrations
npx prisma generate  # Generate Prisma client
```

## 📝 Environment Variables

Create a `.env.local` file:
```env
# Database
DATABASE_URL="your_database_connection_string"

# Authentication (when implemented)
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"

# File Storage
UPLOAD_DIR="./uploads"
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Review documentation in `/docs` folder
- Check compliance guidelines for regulatory questions

---
**Built for pharmaceutical and medical device manufacturing quality management**
