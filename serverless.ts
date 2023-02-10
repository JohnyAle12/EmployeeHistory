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
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:PutItem',
              'dynamodb:GetItem'
            ],
            Resource: {
              'Fn::Join': [
                '',
                [
                  'arn:aws:dynamodb:',
                  { Ref: 'AWS::Region' },
                  ':',
                  { Ref: 'AWS::AccountId' },
                  ':table/employee-history'
                ] 
              ]
            }
          }
        ]
      }
    }
  },
  // import the function via paths
  functions: { 
    getHistoricoEmpleado,
    saveHistoricoEmpleado
  },
};

module.exports = serverlessConfiguration;
