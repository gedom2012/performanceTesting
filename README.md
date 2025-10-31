## 📌 Performance Tests

Tool box contains **Grafana K6** scripts to perform performance tests
These scripts are intended for learning more about this tool.

---

## 📑 Table of Contents

- [📌 Prerequisites](#-prerequisites)
- [🚀 Running Tests](#-running-tests)
- [📌 Test Examples](#-test-examples)
- [ℹ️ Additional Notes](#ℹ️-additional-notes)

---

## 📌 Prerequisites

Ensure **Grafana K6** is installed on your system.  
Follow the official installation guide: 👉 [Install K6](https://grafana.com/docs/k6/latest/set-up/install-k6/)

### ✅ Verify Installation

After installation, confirm that K6 is correctly set up by running:

```bash
k6 --version
```

If installed correctly, it should return the K6 version.

---

## 🚀 Running Tests

To execute a test script, use the following command:

```bash
k6 run <FILE_NAME>
```

### 📌 Example:

```bash
k6 run smoke-test.js
```

---

## ℹ️ Additional Notes

- **Test Scope**: These tests are designed for **performance evaluation** only. They do not cover functional validations.
- **Test Environment**: Ensure you are targeting the correct environment (**Quality or Sandbox**) before running tests.
- **Logs & Results**: By default, K6 outputs results to the console. Consider using K6 extensions for better visualization.

---
