**Collaborators follow these workflow so we can work safely without accidentally wiping each other’s work.**

*1. Clone the repo (first time only).

Instead of git init, always clone the existing repo:
**Bash**
git clone https://github.com/chimken-adobo/Laboratory-Activities.git

This creates a folder called Laboratory-Activities on your machine with everything inside.

*2. Add a new activity folder

If you create a new Activity Folder on your desktop, you should move/copy it into the cloned repo.
<img width="649" height="251" alt="image" src="https://github.com/user-attachments/assets/fb38523e-fe4f-4ad9-a031-8d38e3e062d9" />

It should look like this.

*3. Stage and commit changes.

From inside the repo:
**Bash**
git add "Activity 2 Folder"
git commit -m "Add Activity 2 project"

*4. Pull before pushing (to avoid overwriting)

lways do a pull first in case someone else pushed new changes:
**Bash**
git pull origin main

If there are no conflicts → move to push.
If there are conflicts → Git will tell them which files need fixing.

*5. Push to GitHub

**Bash**
git push origin main

Now GitHub will show both Activity 1 Folder and Activity 2 Folder.

