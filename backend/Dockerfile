FROM python:3.11-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app
COPY backend/pyproject.toml ./pyproject.toml
COPY backend/app ./app
RUN python -m pip install --no-cache-dir .

FROM base AS test
RUN python -m pip install --no-cache-dir ".[test]"
WORKDIR /workspace
COPY pytest.ini ./pytest.ini
COPY tests ./tests
ENV PYTHONPATH=/app
CMD ["pytest", "tests/unit/backend", "tests/integration/backend"]

FROM base AS runtime
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
