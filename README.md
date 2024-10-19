# Java Script

This is a simple website created using HTML, CSS, and JavaScript. It is designed to be deployed on Kubernetes using ArgoCD.

## Files

- **src/**: Contains the website files (`index.html`, `style.css`, and `script.js`).
- **kubernetes/**: Contains the Kubernetes manifests (`deployment.yaml`, `application.yaml`).

## Steps to Deploy

1. Clone the repository.
2. Apply the Kubernetes manifests:
   ```bash
   kubectl apply -f kubernetes/deployment.yaml
