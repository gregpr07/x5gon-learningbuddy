## Installation guide

Create .env file (in `/backend` directory) with the following:

```
SECRET_KEY = <key>
PRODUCTION = <leave empty if not in production>
```

Then `pip install -r requirements.txt` (preferably in virtual env)

Run backend with `python manage.py runserver`
