from fastapi import APIRouter

from app.models.health_model import HealthResponse
from app.services.health_service import get_health_status

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return get_health_status()
