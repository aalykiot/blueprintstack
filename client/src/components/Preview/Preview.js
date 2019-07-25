import React from 'react';
// import Frame from 'react-frame-component';
// import { Query } from 'react-apollo';

import injectSheet from 'react-jss';
// import { gql } from 'apollo-boost';

import styles from './PreviewStyles';

// const GET_TEMPLATE = gql`
//   query($blueprint: String!) {
//     template(blueprint: $blueprint)
//   }
// `;

const Preview = ({ classes }) => (
  <div className={classes.iframeWrapper}>
    {/* <Query
      query={GET_TEMPLATE}
      variables={{
        blueprint:
          '\n# GET /message\n  + Response 200 (text/plain)\n\n           Hello World!\n',
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <div className={classes.empty} />;
        if (error) return <div />;

        return (
          <Frame
            initialContent={data.template}
            className={classes.iframe}
            allowFullScreen
            sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        );
      }}
    </Query> */}
  </div>
);

export default injectSheet(styles)(Preview);
