FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# ホスト0.0.0.0で起動し、外部からのアクセスを許可
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]