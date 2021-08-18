module.exports = {
    branches: "main", 
    repositoryUrl: "https://github.com/jakub-qak/react-app",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/github',{
          assets: [
              { path: "build.zip", label: "Build" },
              { path: "coverage.zip", label: "Coverage" }
          ]  
        }]
    ]
};