module.exports = {
    default: {
      require: ['src/step-definitions/*.ts'],  // Path to your step definitions
      format: ['progress', 'json:reports/report.json'], // Reporting formats (optional)
      paths: ['src/features/*.feature'],        // Path to your feature files
      worldParameters: {
        // any additional parameters or configuration
      }
    }
  };
  