# 🗄️ MongoDB — Quick Reference

## 📘 Overview
MongoDB is a **NoSQL**, **document-oriented** database that stores data as **BSON (Binary JSON)**.  
It’s schema-less, fast, and ideal for scalable modern apps.

---

## ⚙️ Basic Commands
```bash
show dbs                      # List databases
use myDB                      # Switch/create DB
db                            # Show current DB
db.dropDatabase()             # Delete DB

show collections              # List collections
db.createCollection("users")  # Create collection
db.users.drop()               # Delete collection

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model('User', userSchema);

// Insert
await User.create({ name: 'John', age: 25 });

// Query
const users = await User.find({ age: { $gt: 20 } });
