# Depscan Synthetic Test Fixtures

> [!WARNING]
> **SAFETY DISCLAIMER:** This repository contains synthetic, intentionally-flawed test fixtures built strictly for validating static analysis rules of the **Depscan** supply-chain security scanner.
>
> - **DO NOT INSTALL, EXECUTE, OR RUN ANY FILES IN THIS REPOSITORY.**
> - All manifests are static-only fixtures without executable application logic.
> - No real malware or functional exploit code is included.

---

## Overview

This repository provides a multi-ecosystem test suite designed to evaluate static analysis capabilities of supply-chain scanners. Each ecosystem folder contains manifest files with planted test signals alongside clean baseline dependencies for false-positive validation.

Detailed expected scanner findings and module mappings are documented in [EXPECTED_FINDINGS.md](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/EXPECTED_FINDINGS.md).

Step-by-step remediation solutions for every ecosystem vulnerability are stored in the [`solutions/`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions) directory.

---

## Ecosystem Test Signals & Solutions Map

1. **`npm/` (Multi-Issue Case)**
   - **Signal 1:** Known vulnerability (`lodash@4.17.15` pinned exactly in `package.json`/`package-lock.json`, CVE-2020-8203 prototype pollution).
   - **Signal 2:** Suspicious `postinstall` script referencing `scripts/postinstall-helper.js` containing inert pattern-matchable substrings (`eval(`, `curl`, base64 string comment).
   - **Baseline Clean:** `express@4.18.2`.
   - **Solution File:** [`solutions/npm.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/npm.txt)

2. **`python/`**
   - **Signal:** Typosquatting package (`colourama==0.4.6` in `requirements.txt` mimicking legitimate `colorama`).
   - **Baseline Clean:** `requests==2.31.0`.
   - **Solution File:** [`solutions/python.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/python.txt)

3. **`maven/`**
   - **Signal:** Dependency confusion vulnerability (`com.acme.internal:utils-core:1.0.0` in `pom.xml` without private repository scoping).
   - **Baseline Clean:** `org.apache.commons:commons-lang3:3.12.0`.
   - **Solution File:** [`solutions/maven.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/maven.txt)

4. **`go/`**
   - **Signal:** Build/provenance issue (`github.com/example/unreleased-lib v0.0.0-20230101000000-main` branch pseudo-version in `go.mod`; checksum missing from `go.sum`).
   - **Baseline Clean:** `github.com/gin-gonic/gin v1.9.1`.
   - **Solution File:** [`solutions/go.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/go.txt)

5. **`rust/`**
   - **Signal:** Build/provenance issue variant (`unhashed-git-pkg` referenced via Git repository source without commit hash in `Cargo.toml`; checksum omitted from `Cargo.lock`).
   - **Baseline Clean:** `serde = "1.0.195"`.
   - **Solution File:** [`solutions/rust.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/rust.txt)

6. **`ci/` (CI / GitHub Actions Ecosystem)**
   - **Signal:** Workflow security issues (`ci/ci.yml` / `.github/workflows/ci.yml` with `permissions: write-all`, unpinned `actions/checkout@v1`, script injection via `${{ github.event.issue.title }}`).
   - **Baseline Clean:** `actions/setup-node@60ed15dd545567308fd97607dd34592938fd900f` (pinned SHA with node-version).
   - **Solution File:** [`solutions/ci.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/solutions/ci.txt)

---

## Complete Remediation Master Document

A single comprehensive text file covering all ecosystem vulnerabilities and step-by-step remediation steps is available at [`VULNERABILITIES_AND_SOLUTIONS.txt`](file:///c:/Users/Amey%20deshpande/OneDrive/Documents/Desktop/Test_repo_kurukshetra/VULNERABILITIES_AND_SOLUTIONS.txt).

