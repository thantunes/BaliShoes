import React from 'react';
import StorefrontCustom from './components/StorefrontCustom';

const StorefrontCustomApp = (props) => {
  return <StorefrontCustom message={props.message} collectionlink={props.collectionlink} collectiontitle={props.collectiontitle} />
}
StorefrontCustomApp.getSchema = () => {
  return {
    title: 'Prateleira Customizada',
    type: 'object',
    properties: {
      message: {
        title: 'ID da coleção',
        type: 'string',
        default: ""
      },
      collectionlink: {
        title: 'Link da coleção',
        type: 'string',
        default: ""
      },
      collectiontitle: {
        title: 'Título da coleção',
        type: 'string',
        default: ""
      }
    }
  }
}
export default StorefrontCustomApp;
