# Siteyi yerelde sabit portta açar: http://localhost:5050
$port = 5050
Set-Location $PSScriptRoot
Write-Host "http://localhost:$port"
python -m http.server $port --bind 127.0.0.1
