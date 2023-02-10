import saveHistoricoEmpleado from '@functions/saveHistoricoEmpleado';
import type { AWS } from '@serverless/typescript';
import getHistoricoEmpleado from 'src/infraestruture/handlers/functions/getHistoricoEmpleado';

const serverlessConfiguration: AWS = {
  service: 'historico-empleados-api',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    profile: 'jprieto',
    stage: '${opt:stage}',
    region: 'us-east-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    getHistoricoEmpleado,
    saveHistoricoEmpleado
  },
};

module.exports = serverlessConfiguration;
