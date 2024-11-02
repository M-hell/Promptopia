Here’s a `CONTRIBUTING.md` file for your repository, detailing how contributors should make changes and submit detailed descriptions for Hacktoberfest contributions:

---

# Contributing to This Project

Thank you for considering contributing to this project! We welcome all contributions, especially as part of Hacktoberfest. To ensure a smooth contribution process, please follow the steps below.

## How to Contribute

1. **Fork the Repository**
   - Start by forking this repository to your GitHub account. This will allow you to make changes without affecting the main project.

2. **Clone the Forked Repository**
   - After forking the repository, clone it to your local machine:

   ```bash
   git clone https://github.com/M-hell/Promptopia.git
   ```

3. **Make Your Changes**
   - Implement the changes you want to contribute. Please ensure your changes are relevant, clean, and follow the project's coding standards.

4. **Test Your Changes**
   - Before submitting, test the changes to ensure everything works as expected. If applicable, include any new tests or update existing ones.

5. **Commit Your Changes**
   - After verifying the changes, commit them with a descriptive message:

   ```bash
   git add .
   git commit -m "Detailed description of changes"
   ```

   Your commit message should clearly describe the changes you've made. For example:
   
   ```
   Added feature to display user profile pictures in the sidebar
   ```

6. **Push to Your Fork**
   - Push your changes to your forked repository:

   ```bash
   git push
   ```

7. **Create a Pull Request**
   - Open a pull request (PR) to the main repository. Go to the original repository and click on the "New Pull Request" button. Select your fork and branch, and compare it with the main branch of the original repo.
   
   - In the PR description, include the following details:
     - A clear, detailed description of the changes you made.
     - The purpose of the changes (e.g., fixing a bug, adding a feature, improving performance, etc.).
     - Reference any issues or pull requests related to your changes, if applicable.

### Example Pull Request Description

```
### Changes
- Added a feature to display user profile pictures in the sidebar.
- Refactored the `UserSidebar` component to dynamically show a default image if no profile picture is available.

### Why?
This change improves the user experience by allowing users to see visual representation in the sidebar. It also adds fallback functionality for users without a profile picture.

### Issue Reference
This pull request fixes issue #45.

### Tests
- Tested on Chrome and Firefox.
- Confirmed that default profile images appear for users without a profile picture.
- Verified that images scale correctly on mobile devices.
```

## Code of Conduct

Please note that we follow the [Hacktoberfest Code of Conduct](https://hacktoberfest.com/code-of-conduct/). Be respectful, inclusive, and considerate when contributing to this project.

---

This `CONTRIBUTING.md` file provides clear instructions for contributors, including making code changes, testing, writing descriptive commit messages, and submitting detailed pull requests. It’s designed to help streamline the contribution process, especially during Hacktoberfest.
