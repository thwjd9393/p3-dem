from app.models.health_model import HealthResponse


def get_health_status() -> HealthResponse:
    return HealthResponse(status="ok")
