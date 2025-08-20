"use client"

import { useState, useEffect } from "react"

// Advanced code snippets with Next.js, TypeScript, JavaScript, and Mongoose
const codeSnippets = [
  {
    title: "Express Server Setup",
    code: `import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
  },
  {
    title: "TypeScript Interface",
    code: `interface User {
  id: string;
  email: string;
  profile: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  skills: string[];
}

class UserService {
  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return await this.saveUser(user);
  }
  
  async saveUser(user: User): Promise<User> {
    // Simulate saving user to database
    return user;
  }
}`,
  },
  {
    title: "Async Database Operations",
    code: `import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
});

export class DatabaseService {
  async getUsers(limit: number = 10): Promise<User[]> {
    try {
      const query = 'SELECT * FROM users ORDER BY created_at DESC LIMIT $1';
      const result = await pool.query(query, [limit]);
      
      return result.rows.map(row => ({
        id: row.id,
        email: row.email,
        profile: JSON.parse(row.profile),
        createdAt: new Date(row.created_at),
        updatedAt: new Date(row.updated_at)
      }));
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to fetch users');
    }
  }
}`,
  },
  {
    title: "Next.js App Router API",
    code: `import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/lib/auth';

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  role: z.enum(['user', 'admin']),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = createUserSchema.parse(body);
    
    const user = await db.user.create({
      data: {
        ...validatedData,
        createdBy: session.user.id,
      },
      include: {
        profile: true,
        _count: { select: { posts: true } }
      }
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}`,
  },
  {
    title: "Advanced TypeScript Generics",
    code: `type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
  create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
  update(id: string, data: DeepPartial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

class GenericRepository<T extends { id: string; createdAt: Date; updatedAt: Date }> 
  implements Repository<T> {
  
  constructor(private model: any) {}

  async findById(id: string): Promise<T | null> {
    return await this.model.findUnique({ where: { id } });
  }

  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    return await this.model.create({
      data: {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async update(id: string, data: DeepPartial<T>): Promise<T> {
    return await this.model.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }
}`,
  },
  {
    title: "Modern JavaScript Patterns",
    code: `// Advanced async patterns with error handling
const createAsyncQueue = () => {
  const queue = [];
  let processing = false;

  const process = async () => {
    if (processing || queue.length === 0) return;
    
    processing = true;
    
    while (queue.length > 0) {
      const { task, resolve, reject } = queue.shift();
      
      try {
        const result = await task();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    
    processing = false;
  };

  return {
    add: (task) => new Promise((resolve, reject) => {
      queue.push({ task, resolve, reject });
      process();
    }),
    
    size: () => queue.length,
    clear: () => queue.splice(0)
  };
};

// Functional composition with currying
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

const curry = (fn) => (...args) => 
  args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

// Usage example
const addTax = curry((rate, price) => price * (1 + rate));
const formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;
const calculateTotal = pipe(addTax(0.08), formatCurrency);`,
  },
  {
    title: "Advanced Mongoose Schema",
    code: `import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IUser extends Document {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
    avatar?: string;
    bio?: string;
    socialLinks: Map<string, string>;
  };
  roles: string[];
  isActive: boolean;
  lastLoginAt?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateAuthToken(): string;
  toJSON(): any;
}

interface IUserModel extends Model<IUser> {
  findByCredentials(email: string, password: string): Promise<IUser>;
  findActiveUsers(limit?: number): Promise<IUser[]>;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: (email: string) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email),
      message: 'Please provide a valid email address'
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  },
  profile: {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    avatar: { type: String },
    bio: { type: String, maxlength: 500 },
    socialLinks: {
      type: Map,
      of: String,
      default: new Map()
    }
  },
  roles: [{
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  }],
  isActive: { type: Boolean, default: true },
  lastLoginAt: { type: Date }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// Indexes for performance
userSchema.index({ email: 1 });
userSchema.index({ 'profile.firstName': 1, 'profile.lastName': 1 });
userSchema.index({ createdAt: -1 });

// Virtual for full name
userSchema.virtual('profile.fullName').get(function() {
  return \`\${this.profile.firstName} \${this.profile.lastName}\`;
});

// Pre-save middleware for password hashing
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance methods
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateAuthToken = function(): string {
  return jwt.sign(
    { userId: this._id, email: this.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
};

userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};

// Static methods
userSchema.statics.findByCredentials = async function(email: string, password: string): Promise<IUser> {
  const user = await this.findOne({ email, isActive: true }).select('+password');
  
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid login credentials');
  }
  
  user.lastLoginAt = new Date();
  await user.save();
  
  return user;
};

userSchema.statics.findActiveUsers = async function(limit: number = 50): Promise<IUser[]> {
  return this.find({ isActive: true })
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate('profile');
};

export const User = mongoose.model<IUser, IUserModel>('User', userSchema);`,
  },
  {
    title: "React Server Components",
    code: `import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getUserById, getUserPosts } from '@/lib/api';
import { PostCard } from '@/components/post-card';
import { UserProfile } from '@/components/user-profile';
import { LoadingSpinner } from '@/components/loading-spinner';

interface UserPageProps {
  params: { id: string };
  searchParams: { tab?: string };
}

async function UserPosts({ userId }: { userId: string }) {
  const posts = await getUserPosts(userId);
  
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No posts yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default async function UserPage({ params, searchParams }: UserPageProps) {
  const user = await getUserById(params.id);
  
  if (!user) {
    notFound();
  }

  const activeTab = searchParams.tab || 'posts';

  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile user={user} />
      
      <div className="mt-8">
        <div className="border-b border-border">
          <nav className="flex space-x-8">
            <a 
              href={\`/users/\${user.id}?tab=posts\`}
              className={\`py-2 px-1 border-b-2 font-medium text-sm \${
                activeTab === 'posts' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }\`}
            >
              Posts
            </a>
            <a 
              href={\`/users/\${user.id}?tab=about\`}
              className={\`py-2 px-1 border-b-2 font-medium text-sm \${
                activeTab === 'about' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }\`}
            >
              About
            </a>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'posts' && (
            <Suspense fallback={<LoadingSpinner />}>
              <UserPosts userId={user.id} />
            </Suspense>
          )}
          
          {activeTab === 'about' && (
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>{user.profile.bio || 'No bio available.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`,
  },
]

export function LiveCodingAnimation() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    const lines = snippet.code.split("\n")

    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + lines[currentLine] + "\n")
        setCurrentLine((prev) => prev + 1)
      }, 150)

      return () => clearTimeout(timer)
    } else {
      // Wait 3 seconds then move to next snippet
      const timer = setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        setDisplayedCode("")
        setCurrentLine(0)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentLine, currentSnippet])

  return (
    <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-slate-400 text-xs">{codeSnippets[currentSnippet].title}</span>
      </div>

      <div className="h-96 overflow-hidden">
        <pre className="text-slate-300 leading-relaxed">
          <code>
            {displayedCode.split("\n").map((line, index) => (
              <div key={index} className="flex">
                <span className="text-slate-500 w-8 text-right mr-4 select-none">{line.trim() ? index + 1 : ""}</span>
                <span className="flex-1">
                  {line
                    .split(
                      /(\bimport\b|\bexport\b|\bconst\b|\blet\b|\bvar\b|\bfunction\b|\bclass\b|\binterface\b|\basync\b|\bawait\b|\btry\b|\bcatch\b|\bif\b|\belse\b|\breturn\b|\bPrismaClient\b|\bmongoose\b)/,
                    )
                    .map((part, i) => {
                      if (
                        [
                          "import",
                          "export",
                          "const",
                          "let",
                          "var",
                          "function",
                          "class",
                          "interface",
                          "async",
                          "await",
                          "try",
                          "catch",
                          "if",
                          "else",
                          "return",
                          "PrismaClient",
                          "mongoose",
                        ].includes(part)
                      ) {
                        return (
                          <span key={i} className="text-accent">
                            {part}
                          </span>
                        )
                      }
                      return part
                    })}
                </span>
              </div>
            ))}
            {currentLine < codeSnippets[currentSnippet].code.split("\n").length && (
              <span className="animate-pulse text-accent">|</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
