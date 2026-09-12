# Expected Findings for Depscan Scanner Validation

This document defines the expected detection output and findings map for the synthetic test fixtures in this repository.

> [!NOTE]
> **Multi-Issue Ecosystem Case:** The `npm/` ecosystem folder intentionally contains **TWO independent test signals** that generate distinct findings across two separate Depscan detection modules (known-vuln scan and suspicious behavior analysis).

---

## Findings Matrix & Solution Map

| Ecosystem | File | Planted Issue | Depscan Detection Module | Expected Severity / Priority | Solution Reference File |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **npm** | `npm/package.json`<br>`npm/package-lock.json` | Pinned vulnerable dependency `lodash@4.17.15` (CVE-2020-8203 prototype pollution) | **known-vuln scan** | `High` | [`solutions/npm.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/npm.txt) (Issue 1) |
| **npm** | `npm/package.json`<br>`npm/scripts/postinstall-helper.js` | Suspicious `postinstall` script referencing helper script containing inert pattern substrings (`eval(`, `curl`, base64 string) | **suspicious behavior** | `Medium` / `High` | [`solutions/npm.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/npm.txt) (Issue 2) |
| **python** | `python/requirements.txt` | Typosquatting package `colourama==0.4.6` (typosquat of `colorama`, PyPI 2022 incident) | **typosquat check** | `High` | [`solutions/python.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/python.txt) |
| **maven** | `maven/pom.xml` | Dependency confusion risk: internal-looking `groupId` `com.acme.internal` with no private repo or repository scoping | **dependency confusion** | `High` | [`solutions/maven.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/maven.txt) |
| **go** | `go.mod`<br>`go.sum` | Weak provenance: pseudo-version `v0.0.0-20230101000000-main` targeting unreleased branch; missing checksum in `go.sum` | **provenance** | `Medium` | [`solutions/go.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/go.txt) |
| **rust** | `Cargo.toml`<br>`Cargo.lock` | Weak provenance variant: Git source dependency (`git = "..."`) without commit hash pin; missing checksum in `Cargo.lock` | **provenance** | `Medium` | [`solutions/rust.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/rust.txt) |
| **ci** | `ci/ci.yml`<br>`.github/workflows/ci.yml` | Overly permissive permissions (`write-all`), unpinned action (`actions/checkout@v1`), script injection (`${{ github.event.issue.title }}`) | **ci-security** | `High` / `Critical` | [`solutions/ci.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/ci.txt) |

---

## Remediation Solutions Directory & Master Document

Step-by-step resolution guides and before/after verification instructions are provided in the [`solutions/`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions) directory and in the master text file [`VULNERABILITIES_AND_SOLUTIONS.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/VULNERABILITIES_AND_SOLUTIONS.txt):

- **Master Vulnerabilities & Solutions Text File**: [`VULNERABILITIES_AND_SOLUTIONS.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/VULNERABILITIES_AND_SOLUTIONS.txt)
- **CI / GitHub Actions Solution**: [`solutions/ci.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/ci.txt)
- **npm Solution**: [`solutions/npm.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/npm.txt)
- **Python Solution**: [`solutions/python.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/python.txt)
- **Maven Solution**: [`solutions/maven.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/maven.txt)
- **Go Solution**: [`solutions/go.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/go.txt)
- **Rust Solution**: [`solutions/rust.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/rust.txt)

---

## Baseline Clean Dependencies (Negative Controls)

Each ecosystem also contains at least one clean baseline dependency/step to ensure scanner false-positive testing:

- **npm**: `express@4.18.2` (fully locked in `package-lock.json` with integrity hash)
- **python**: `requests==2.31.0` (reputable, fully version-pinned package)
- **maven**: `org.apache.commons:commons-lang3:3.12.0` (standard public Maven dependency)
- **go**: `github.com/gin-gonic/gin v1.9.1` (tagged release with checksum in `go.sum`)
- **rust**: `serde = "1.0.195"` (crates.io package with checksum in `Cargo.lock`)
- **ci**: `actions/setup-node@60ed15dd545567308fd97607dd34592938fd900f` (pinned full SHA commit hash with explicit node version)
