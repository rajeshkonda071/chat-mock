# Render Deployment Guide

This short guide explains how to deploy the `server/` (backend) to Render and connect the GitHub Actions workflow already included in this repository.

1) Create a Render Service
  - Sign in to https://dashboard.render.com
  - Click **New** → **Web Service**
  - Choose **Docker** (or Node if you prefer buildpack). If you choose Docker, the repository `server/Dockerfile` will be used.
  - Give the service a name and select a region.
  - Create the service (you can leave advanced options default for a quick start).

2) Create an API Key
  - Go to Render Dashboard → Account → API Keys.
  - Click **Create API Key** and copy the value. This value will not be shown again.

3) Get the Service ID
  - Open the service you created on Render.
  - The service ID can be found in the service URL or the service settings. It looks like: `srv-xxxxxxxxxxxxxxxx`.

4) Add Repository Secrets on GitHub
  - Go to your GitHub repo → Settings → Secrets and variables → Actions → New repository secret.
  - Add a secret named `RENDER_API_KEY` with the API key from step 2.
  - Add a secret named `RENDER_SERVICE_ID` with the service ID from step 3.

5) Trigger a Deploy
  - Push any commit to the `main` branch (or re-run the `Deploy Backend to Render` workflow in GitHub Actions).
  - The workflow `/.github/workflows/deploy-render.yml` will POST to the Render API and trigger a new deploy.

6) Check Logs
  - In GitHub Actions, open the latest `Deploy Backend to Render` run and inspect the `Trigger Render deploy` step.
  - The workflow prints the HTTP status and the response body returned by Render. If the status is not `200`/`201`, the job will fail and print the response for debugging.

Troubleshooting
- 401 Unauthorized: Verify `RENDER_API_KEY` is correct and has permissions.
- 404 Not Found: Verify `RENDER_SERVICE_ID` is correct and the service exists in the same account.
- 429 / Rate limited: Wait and retry. Consider adding retries in the workflow.

Optional improvements
- Add a small verification step to the workflow to poll the Render deploy status until it becomes `success`.
- Use Render's GitHub integration (connect the repo in Render) for automatic deploys without API keys.
