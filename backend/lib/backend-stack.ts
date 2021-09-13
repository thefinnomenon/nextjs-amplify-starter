import * as cdk from '@aws-cdk/core';
import * as pinpoint from '@aws-cdk/aws-pinpoint';
import * as location from '@aws-cdk/aws-location';
import * as appsync from '@aws-cdk/aws-appsync';
import { AppSyncTransformer } from 'cdk-appsync-transformer';

require('dotenv').config({ path: `../envs/.env.${process.env.NODE_ENV}` });

const { CfnOutput } = cdk;

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /* PINPOINT */
    const pinpointApp = new pinpoint.CfnApp(this, 'PinpointApp', {
      name: `${process.env.APP_NAME}-${process.env.NODE_ENV}-PinpointApp`,
    });

    /* LOCATION */
    const placeIndex = new location.CfnPlaceIndex(this, 'PlaceIndex', {
      indexName: `${process.env.APP_NAME}-${process.env.NODE_ENV}-PlaceIndex`,
      dataSource: 'Esri',
      pricingPlan: 'RequestBasedUsage',
    });

    /* APPSYNC */
    const api = new AppSyncTransformer(
      this,
      `${process.env.APP_NAME}-${process.env.NODE_ENV}`,
      {
        apiName: `${process.env.APP_NAME}-${process.env.NODE_ENV}-AppSyncAPI`,
        schemaPath: '../src/schema.graphql',
        authorizationConfig: {
          defaultAuthorization: {
            authorizationType: appsync.AuthorizationType.API_KEY,
          },
          additionalAuthorizationModes: [
            {
              authorizationType: appsync.AuthorizationType.IAM,
            },
          ],
        },
        xrayEnabled: true,
      },
    );

    /* OUTPUTS */
    new CfnOutput(this, 'pinpointAppIDOutput', {
      value: pinpointApp.ref,
    });
    new CfnOutput(this, 'placeIndexIDOutput', {
      value: placeIndex.ref,
    });
    new cdk.CfnOutput(this, 'appsyncApiIDOutput', {
      value: api.appsyncAPI.apiId,
    });
    new cdk.CfnOutput(this, 'appsyncURLOutput', {
      value: api.appsyncAPI.graphqlUrl,
    });
    new cdk.CfnOutput(this, 'appsyncApiKeyOutput', {
      value: api.appsyncAPI.apiKey || '',
    });
  }
}
