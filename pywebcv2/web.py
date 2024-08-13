from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

import uvicorn
import settings
from mangum import Mangum


# app = FastAPI()
app = FastAPI(root_path=settings.PROXY_PATH)
# handler = Mangum(app)  # Entry point for AWS Lambda.
handler = Mangum(app, api_gateway_base_path=settings.PROXY_PATH)  # Entry point for AWS Lambda.
# app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/assets", StaticFiles(directory="resource/cv2/assets"), name="assets")

templates = Jinja2Templates(directory="resource")
templates_cv = Jinja2Templates(directory="resource/cv2")



@app.get("/index", response_class=HTMLResponse)
async def root(request: Request):
    # return templates.TemplateResponse("index2.html", {"request": request})
    print ("handler=", handler)
    print ("handler=", handler.config)
    return templates_cv.TemplateResponse("index.html", context={"request": request})

@app.get("/index.html", response_class=HTMLResponse)
async def root(request: Request):
    # return templates.TemplateResponse("index2.html", {"request": request})
    print ("handler=", handler)
    print ("handler=", handler.config)
    return templates_cv.TemplateResponse("index.html", context={"request": request})

@app.get("/index_en.html", response_class=HTMLResponse)
async def root(request: Request):
    # return templates.TemplateResponse("index2.html", {"request": request})
    print ("handler=", handler)
    print ("handler=", handler.config)
    return templates_cv.TemplateResponse("index_en.html", context={"request": request})

@app.get("/index2", response_class=HTMLResponse)
async def root(request: Request):
    # return templates.TemplateResponse("index2.html", {"request": request})
    print ("handler=", handler)
    print ("handler=", handler.config)
    return templates.TemplateResponse("index2.html", context={"request": request})



if __name__ == "__main__":
    # Run this as a server directly.
    port = 8000
    print(f"Running the FastAPI server on port {port}.")
    uvicorn.run("web:app", host="0.0.0.0", port=port)
