kubectl apply -f configmaps/server.yaml
kubectl apply -f configmaps/mysql.yaml
kubectl apply -f configmaps/client.yaml
kubectl apply -f deployments.yaml
kubectl apply -f services.yaml
kubectl apply -f ingress.yaml
