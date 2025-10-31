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
