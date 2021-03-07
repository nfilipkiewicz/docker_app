# Use an official Python runtime as a parent image
FROM python:3.8.3-alpine

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /usr/src/web

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# Install Python dependencies
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

# install psycopg2 dependencies


# Add the rest of the code
COPY . .

# Make port 8000 available for the app
EXPOSE 8000