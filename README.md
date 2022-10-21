[![CodeQL](https://github.com/GeoIntel/GeoIntel/actions/workflows/codeql.yml/badge.svg)](https://github.com/GeoIntel/GeoIntel/actions/workflows/codeql.yml) [![GeoIntel Releases](https://github.com/GeoIntel/GeoIntel/actions/workflows/release.yml/badge.svg)](https://github.com/GeoIntel/GeoIntel/actions/workflows/release.yml)

# GeoIntel

Open source GEOINT tool.

This project is currently under development. Please use it, check it out, provide [feedback](https://github.com/GeoIntel/GeoIntel/issues), but do not rely on it for serious investigations. [Database migrations](https://github.com/GeoIntel/GeoIntel/issues/54) for [release upgrades](https://github.com/GeoIntel/GeoIntel/issues/55) are not yet setup, so existing data is not backwards compatible.

## Let's Go

### Stable Release

```
mkdir GeoIntel
cd GeoIntel
mkdir ch_data
mkdir ch_logs
wget https://github.com/GeoIntel/GeoIntel/releases/download/v0.1.1/docker-compose.yml
docker compose up -d
```
Go to https://localhost:3000

### Main Branch

```
git clone https://github.com/GeoIntel/GeoIntel
cd GeoIntel
mkdir ch_data
mkdir ch_logs
docker compose up -d
```
Go to https://localhost:3000
