# Cadence HRT - Human Readable Testing

This project aims to provide the ability to write tests for your Cadence code using TOML (or other human-readable formats in the future).

## Local Development
- Install dependencies
    - `npm install`
- Compile Handlebars templates and output generated code to stdout
    - `npm run generate`
    
Now you can test your TOML files with `node index.js ./toml/kibble.toml`