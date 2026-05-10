from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 2台のPC連携のためのCORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "success", "message": "Backend is running!"}

@app.get("/api/data")
def get_data():
    return {"items": ["Docker", "WSL2", "VSCode", "FastAPI"]}
