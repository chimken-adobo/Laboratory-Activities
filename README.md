# Collaboration Workflow

**Collaborators, please follow this workflow so we can work safely without accidentally overwriting each other’s work.**

---

### 1. Clone the repository (first time only)

Instead of running `git init`, always clone the existing repository:

```bash
git clone https://github.com/chimken-adobo/Laboratory-Activities.git
```

This will create a folder called **Laboratory-Activities** on your machine with all the files inside.

---

### 2. Add a new activity folder

If you create a new **Activity Folder** on your desktop, move/copy it into the cloned repository.

<img width="649" height="251" alt="image" src="https://github.com/user-attachments/assets/fb38523e-fe4f-4ad9-a031-8d38e3e062d9" />

It should look like this inside the repo.

---

### 3. Stage and commit your changes

From inside the repo, run:

```bash
git add "Activity 2 Folder"
git commit -m "Add Activity 2 project"
```

---

### 4. Pull before pushing (to avoid overwriting)

Always do a pull first in case someone else pushed new changes:

```bash
git pull origin main
```

* If there are **no conflicts** → move to push.
* If there are **conflicts** → Git will tell you which files need fixing.

---

### 5. Push to GitHub

```bash
git push origin main
```

Now GitHub will show both **Activity 1 Folder** and **Activity 2 Folder**.

---
