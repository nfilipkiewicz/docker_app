to run backend:

1. chmod +x backend/entrypoint.sh    
2. docker-compose up -d --build 
3. python3 backend/manage.py migrate
4. python3 backend/manage.py runserver


to run frontend (open new terminal session)

in directory/frontend
1. npm install
2. nam start