from fastapi import FastAPI

from app.controllers.health_controller import router as health_router

app = FastAPI(title="AI 귀갓길 안심 도우미 API")
app.include_router(health_router)
