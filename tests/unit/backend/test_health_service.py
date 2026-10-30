from app.models.health_model import HealthResponse
from app.services.health_service import get_health_status


def test_health_service_returns_ok_status() -> None:
    assert get_health_status() == HealthResponse(status="ok")
