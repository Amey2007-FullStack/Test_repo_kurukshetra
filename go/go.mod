module depscan-test-go

go 1.20

require (
	// SYNTHETIC TEST SIGNAL: Build/provenance issue (pseudo-version pointing to branch without tagged release, missing checksum in go.sum)
	github.com/example/unreleased-lib v0.0.0-20230101000000-main

	// BASELINE CLEAN DEPENDENCY: Reputable fully-pinned dependency
	github.com/gin-gonic/gin v1.9.1
)
